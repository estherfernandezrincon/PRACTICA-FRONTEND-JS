import { errorView } from "../views.js";

export default class ErrorMessageController {
  constructor(element) {
    this.element = element;
  }

  showError(e) {
    console.log(e);
    this.element.innerHTML = errorView(e);
    const button = this.element.querySelector("button");
    button.addEventListener("click", () => {
      this.hideError();
    });
  }

  hideError() {
    this.element.innerHTML = "";
  }
}
