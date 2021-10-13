import { errorView } from "../views.js";

export default class ErrorMessageController {
  constructor(element) {
    this.element = element;
  }

  showError(error) {
    this.element.innerHTML = errorView(error);
    const button = this.element.querySelector("button");
    button.addEventListener("click", () => {
      this.hideError();
    });
  }

  hideError() {
    this.element.innerHTML = "";
  }
}
