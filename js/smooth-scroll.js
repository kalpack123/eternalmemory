
/* =========================================
   SMOOTH SCROLL - VECNAYA PAMYAT
   Premium scrolling experience
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetID = this.getAttribute("href");
            const target = document.querySelector(targetID);

            if (!target) return;

            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

        });

    });

});