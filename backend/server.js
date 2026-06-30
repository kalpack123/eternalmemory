require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

// проверка что env работает
if (!TOKEN || !CHAT_ID) {
    console.log("❌ Нет TOKEN или CHAT_ID в .env");
}

// 🔒 анти-спам память
const requests = {};

app.post("/api/contact", async (req, res) => {

    const ip = req.ip;
    const now = Date.now();

    const lastRequest = requests[ip] || 0;

    // ⛔ ограничение 10 секунд
    if (now - lastRequest < 10000) {
        return res.status(429).json({
            success: false,
            message: "Подожди 10 секунд ⏳"
        });
    }

    requests[ip] = now;

    const { name, phone, message, website } = req.body;

    // 🤖 honeypot (анти-бот)
    if (website) {
        return res.status(400).json({
            success: false,
            message: "Bot detected"
        });
    }

    // ✅ проверка данных
    if (!name || !phone) {
        return res.status(400).json({
            success: false,
            message: "Заполни обязательные поля"
        });
    }

    if (message && message.length > 500) {
        return res.status(400).json({
            success: false,
            message: "Слишком длинное сообщение"
        });
    }

    const text = `
📩 Новая заявка:

👤 Имя: ${name}
📞 Телефон: ${phone}
💬 Сообщение: ${message || "нет"}
`;

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: text
                })
            }
        );

        const data = await response.json();
        console.log("TG RESPONSE:", data);

        res.json({ success: true });

    } catch (err) {
        console.log("ERROR:", err);

        res.status(500).json({
            success: false,
            message: "Ошибка сервера"
        });
    }
});

app.listen(3000, () => {
    console.log("🚀 Сервер запущен: http://localhost:3000");
});