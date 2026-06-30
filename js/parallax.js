
/* =========================================
   PARALLAX EFFECT - VECNAYA PAMYAT
   Cinematic depth movement
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero");
    const heroContent = document.querySelector(".hero-content");
    const video = document.querySelector(".hero video");

    if (!hero) return;

    window.addEventListener("scroll", () => {

        let scroll = window.scrollY;

        /* Background video slow movement */
        if (video) {
            video.style.transform = `translateY(${scroll * 0.2}px) scale(1.1)`;
        }

        /* Text moves slightly opposite direction */
        if (heroContent) {
            heroContent.style.transform = `translateY(${scroll * 0.1}px)`;
        }

    });

});