
/* =========================================
   GSAP PREMIUM ANIMATIONS
   VECNAYA PAMYAT LUXURY MOTION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    /* =========================
       HERO INTRO ANIMATION
    ========================== */

    gsap.from(".hero-content span", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.3
    });

    gsap.from(".hero-content h1", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        delay: 0.6,
        ease: "power3.out"
    });

    gsap.from(".hero-content p", {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 1,
        ease: "power2.out"
    });

    gsap.from(".hero-buttons", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 1.3
    });

    /* =========================
       SECTIONS REVEAL
    ========================== */

    gsap.utils.toArray("section").forEach((section) => {

        gsap.from(section, {
            opacity: 0,
            y: 80,
            duration: 1.2,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });

    });

    /* =========================
       CARDS STAGGER ANIMATION
    ========================== */

    gsap.from(".card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".cards",
            start: "top 80%"
        }
    });

});