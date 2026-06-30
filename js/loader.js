window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    if (!loader) return;

    // ждём дольше, чтобы текст точно появился
    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 2000); // УВЕЛИЧИЛ ВРЕМЯ
});