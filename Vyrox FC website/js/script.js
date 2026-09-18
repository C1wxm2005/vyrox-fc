/* =========================================================
   VYROX FC
   WEBSITE JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    if (!navLinks) {
        return;
    }

    navLinks.classList.toggle("active");

}


/* =========================================================
   CLOSE MOBILE MENU WHEN A LINK IS CLICKED
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.getElementById("navLinks");

    if (!navLinks) {
        return;
    }

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });

});


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function revealOnScroll() {

    const elements = document.querySelectorAll(".reveal");

    elements.forEach(function (element) {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;


        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("visible");

        }

    });

}


/* =========================================================
   PAGE LOAD
   ========================================================= */

window.addEventListener("load", function () {

    revealOnScroll();

});


/* =========================================================
   SCROLL
   ========================================================= */

window.addEventListener("scroll", function () {

    revealOnScroll();

});