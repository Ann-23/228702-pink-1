var pageHeader = document.querySelector(".page-header");
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

pageHeader.classList.remove("page-header--nojs");
navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed") & pageHeader.classList.contains("page-header--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
      pageHeader.classList.remove("page-header--closed");
      pageHeader.classList.add("page-header--opened");
    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.remove("main-nav--opened");
      pageHeader.classList.add("page-header--closed");
      pageHeader.classList.remove("page-header--opened");
    }
});
