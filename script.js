'use strict';

/**
 * ฟังก์ชันช่วยเพิ่ม Event ให้กับ Element (แก้จุดพิมพ์ผิด i < elem.length)
 */
const addEventOnElem = function (elem, type, callback) {
    if (elem && elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else if (elem) {
        elem.addEventListener(type, callback);
    }
}

/**
 * Navbar Toggle (เปิด-ปิดเมนูมือถือ)
 */
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLink = document.querySelectorAll("[data-nav-Link]");
const overlay = document.querySelector("[data-overlay]");

const togglerNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", togglerNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOnElem(navbarLink, "click", closeNavbar);

/**
 * Header Active & Sticky (แก้จุดพิมพ์ผิด scrollY)
 */
const header = document.querySelector("[data-header]");

const headerActive = function () {
    if (window.scrollY > 150) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
    if (lastScrolledPos >= window.scrollY) {
        header.classList.remove("header-hide");
    } else {
        header.classList.add("header-hide");
    }
    lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);

/**
 * Scroll Reveal (ตัวทำให้สินค้าเด้งขึ้น)
 */
const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
    for (let i = 0; i < sections.length; i++) {
        // ถ้ายอดของ Section เลื่อนขึ้นมาถึงเกือบกลางจอ ให้ใส่คลาส active
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
            sections[i].classList.add("active");
        } else {
            sections[i].classList.remove("active");
        }
    }
}

// สั่งให้ทำงานทันทีที่โหลดหน้าเว็บ และตอนเลื่อน Scroll
window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);