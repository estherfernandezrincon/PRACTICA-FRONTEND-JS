import AddNewController from "./controllers/addNewController.js";
import MessageController from "./controllers/messageController.js";

window.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  new AddNewController(form);

  const errorMessage = document.querySelector(".message");
  new MessageController(errorMessage);

  const welcomeMessage = document.querySelector(".welcome");
  new MessageController(welcomeMessage);
});
