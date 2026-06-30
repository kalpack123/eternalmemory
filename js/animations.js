
/* =========================================
   ANIMATIONS - VECNAYA PAMYAT
   Premium motion design (GSAP-ready)
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       BASIC REVEAL ANIMATION
    ========================== */

    const elements = document.querySelectorAll(
        ".card, .about h2, .about p, .services h2, footer"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));


    /* =========================
       HERO TEXT ANIMATION
    ========================== */

    const heroTitle = document.querySelector(".hero-content h1");
    const heroText = document.querySelector(".hero-content p");
    const heroSpan = document.querySelector(".hero-content span");

    if (heroTitle) {

        heroTitle.style.opacity = "0";
        heroTitle.style.transform = "translateY(40px)";

        setTimeout(() => {
            heroTitle.style.transition = "1.2s ease";
            heroTitle.style.opacity = "1";
            heroTitle.style.transform = "translateY(0)";
        }, 600);
    }

    if (heroText) {

        heroText.style.opacity = "0";
        heroText.style.transform = "translateY(40px)";

        setTimeout(() => {
            heroText.style.transition = "1.4s ease";
            heroText.style.opacity = "1";
            heroText.style.transform = "translateY(0)";
        }, 900);
    }

    if (heroSpan) {

        heroSpan.style.opacity = "0";

        setTimeout(() => {
            heroSpan.style.transition = "1s ease";
            heroSpan.style.opacity = "1";
        }, 300);
    }


    /* =========================
       CARD HOVER DEPTH EFFECT
    ========================== */

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-10px)
            `;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });

});