import AddNewController from "./controllers/addNewController.js";
import MessageController from "./controllers/messageController.js";
import DataService from "./services/dataService.js";

window.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  new AddNewController(form);

  const errorMessage = document.querySelector(".message");
  new MessageController(errorMessage);

  const welcomeMessage = document.querySelector(".message");
  new MessageController(welcomeMessage);

  if (DataService.isAuthenticated() === false) {
    window.location.href = "/login.html?next=/addNew.html";
  }
});
