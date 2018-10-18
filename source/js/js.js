var pageHeader = document.querySelector(".page-header");
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var appDownload = document.querySelector(".app-download");
var top = document.querySelector(".top");
var topTitle = document.querySelector(".top__title");

pageHeader.classList.remove("page-header--nojs");
navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed") & pageHeader.classList.contains("page-header--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
      pageHeader.classList.remove("page-header--closed");
      pageHeader.classList.add("page-header--opened");
      appDownload.classList.remove("app-download--closed");
      appDownload.classList.add("app-download--opened");
      top.classList.remove("top--closed");
      top.classList.add("top--opened");
      topTitle.classList.remove("top__title--closed");
      topTitle.classList.add("top__title--opened");
    } else {
      navMain.classList.remove("main-nav--opened");
      navMain.classList.add("main-nav--closed");
      pageHeader.classList.remove("page-header--opened");
      pageHeader.classList.add("page-header--closed");
      appDownload.classList.remove("app-download--opened");
      appDownload.classList.add("app-download--closed");
      top.classList.remove("top--opened");
      top.classList.add("top--closed");
      topTitle.classList.remove("top__title--opened");
      topTitle.classList.add("top__title--closed");
    }
});
