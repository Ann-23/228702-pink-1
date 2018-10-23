var popupNotDone = document.querySelector(".pop-up--not-done");
var popupDone = document.querySelector(".pop-up--done");
var linkOk = document.querySelector(".button-ok");
var link = document.querySelector(".button-close");
var form = document.querySelector("form");
var surname = document.querySelector("[name=surname]");
var name = document.querySelector("[name=name]");
var email = document.querySelector("[name=email]");

console.log("surname.value", surname.value);
console.log("name.value", name.value);
console.log("email.value", email.value);

form.addEventListener("submit", function (evt) {
  if (!surname.value || !name.value || !email.value) {
    evt.preventDefault();
    popupNotDone.classList.add("pop-up--show");

    linkOk.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupNotDone.remove("pop-up--show");
    });
  } else {
    evt.preventDefault();
    popupDone.classList.add("pop-up--show");

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupDone.remove("pop-up--show");
    });
  }
});
