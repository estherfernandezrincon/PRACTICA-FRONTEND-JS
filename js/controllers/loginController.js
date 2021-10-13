import DataService from "../services/DataService.js";
import PubSub from "../services/PubSub.js";

export default class LoginController {
  constructor(element) {
    this.element = element;
    this.attachEventListener();
  }

  attachEventListener() {
    //element es el formulario
    this.element.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (this.element.checkValidity()) {
        const data = new FormData(this.element);
        const username = data.get("username");
        const password = data.get("password");
        try {
          const finalResult = await DataService.login(username, password);
          location.href = "/"; //redirigimos a pagina principal
        } catch (e) {
          PubSub.publish(PubSub.events.SHOW_ERROR, e);
        }
      } else {
        const showError = "All fields are required";
        PubSub.subscribe(PubSub.events.SHOW_ERROR, showError);
      }
    });

    this.element.querySelectorAll("input").forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        if (this.element.checkValidity()) {
          this.element.querySelector("button").removeAttribute("disabled");
        } else {
          this.element.querySelector("button").setAttribute("disabled", "");
        }
      });
    });
  }
}
