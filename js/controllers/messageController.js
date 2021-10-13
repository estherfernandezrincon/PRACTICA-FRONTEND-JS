import PubSub from "../services/PubSub.js";
import { errorView } from "../views.js";
import { successView } from "../views.js";

export default class MessageController {
  constructor(element) {
    this.element = element;

    //nos subscribimos a PubSub y usamos arrow function ya que si no this hace referencia a otro this
    PubSub.subscribe(PubSub.events.SHOW_ERROR, (e) => {
      this.showMistake(e);
    });

    PubSub.subscribe(PubSub.events.SHOW_SUCCESS, (success) => {
      this.showSuccess(success);
    });
  }

  showMistake(message) {
    //console.log(message);
    this.element.innerHTML = errorView(message);

    const button = this.element.querySelector("button");
    button.addEventListener("click", () => {
      this.hideError();
    });
  }

  showSuccess(message) {
    this.element.innerHTML = successView(message);

    const button = this.element.querySelector("button");
    button.addEventListener("click", () => {
      this.hideError();
    });
  }

  hideError() {
    this.element.innerHTML = "";
  }
}
