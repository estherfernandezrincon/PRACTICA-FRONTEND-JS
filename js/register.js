import RegisterController from "./controllers/registerController.js";
import MessageController from "./controllers/messageController.js";

window.addEventListener("DOMContentLoaded", function () {
  //nodo del formulario donde hacemos registro
  const form = document.querySelector("form");
  new RegisterController(form);

  //nodo formulario de mensaje de error o exito
  const errorMessage = document.querySelector(".errorMessage");
  new MessageController(errorMessage);
});
