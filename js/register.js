import RegisterController from "./controllers/registerController.js";

window.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  new RegisterController(form);
});
