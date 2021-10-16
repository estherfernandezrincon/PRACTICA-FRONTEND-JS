import LoginController from "./controllers/loginController.js";
import MessageController from "./controllers/messageController.js";

window.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  new LoginController(form);

  const errorMessage = document.querySelector(".errorMessage");
  new MessageController(errorMessage);

  const welcomeMessage = document.querySelector(".welcomeMessage");
  new MessageController(welcomeMessage);
});
