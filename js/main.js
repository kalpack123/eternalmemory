window.addEventListener("DOMContentLoaded", () => {

    /* LOADER */
    const loader = document.querySelector(".loader");

    if (loader) {
        loader.style.transition = "opacity 0.8s ease";

        setTimeout(() => {
            
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 800);
        }, 1200);
    }

    /* HEADER */
    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    /* FADE */
    const faders = document.querySelectorAll(".card, section h2, .about p, .about h2");

    if (faders.length > 0) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("show");
                obs.unobserve(entry.target);
            });
        }, { threshold: 0.2 });

        faders.forEach(el => {
            el.classList.add("fade");
            observer.observe(el);
        });
    }

    /* NAV */
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function(e) {
            const href = this.getAttribute("href");

            if (href.startsWith("#")) {
                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    /* BUTTON EFFECT */
    document.querySelectorAll(".btn, .btn-outline").forEach(btn => {
        btn.addEventListener("click", () => {
            const ripple = document.createElement("span");
            ripple.classList.add("ripple");
            btn.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

function showToast(text, type = "success") {
    toast.textContent = text;
    toast.className = `toast show ${type}`;

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        name: form.name.value,
        phone: form.phone.value,
        message: form.message.value
    };

    try {
        const res = await fetch("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if (result.success) {
            showToast("Заявка отправлена ✅", "success");
            form.reset();
        } else {
            showToast("Ошибка отправки ❌", "error");
        }

    } catch (err) {
        showToast("Сервер не отвечает ❌", "error");
    }
});
});
const formStartTime = Date.now();

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const timeSpent = Date.now() - formStartTime;

    if (timeSpent < 3000) {
        showNotification('Слишком быстро 🤨', 'error');
        return;
    }

  
});