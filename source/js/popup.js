var popupNotDone = document.querySelector(".pop-up--not-done");
var linkOk = document.querySelector(".button-ok");
var popupDone = document.querySelector(".pop-up--done");
var linkClose = document.querySelector(".button-close");
var form = document.querySelector("form");
var surname = document.querySelector("[name=surname]");
var name = document.querySelector("[name=name]");
var email = document.querySelector("[name=email]");

form.addEventListener("submit", function (evt) {
  if (!surname.value || !name.value || !email.value) {
    evt.preventDefault();
    popupNotDone.classList.add("pop-up--show");
    surname.classList.add("input__control--red");
    name.classList.add("input__control--red");
    email.classList.add("input__control--red");

    linkOk.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupNotDone.remove("pop-up--show");
    });
  } else {
    evt.preventDefault();
    popupDone.classList.add("pop-up--show");

    linkClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupDone.remove("pop-up--show");
    });
  }
});
