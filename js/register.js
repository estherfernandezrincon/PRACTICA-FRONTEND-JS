import RegisterController from "./controllers/registerController.js";

window.addEventListener("DomContentLoaded", function () {
  const form = document.querySelector("form");
  new RegisterController(form);
});
