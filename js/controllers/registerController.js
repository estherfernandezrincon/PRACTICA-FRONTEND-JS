import DataService from "../services/DataService.js";
import PubSub from "../services/PubSub.js";

export default class RegisterController {
  constructor(element) {
    this.element = element;
    this.attachEventListener();
  }

  checkIfPasswordsAreEqual() {
    const InputPassword = this.element.querySelectorAll(
      'input[type="password"]'
    );

    let password = [];
    for (const newInput of InputPassword) {
      if (password.includes(newInput.value) === false) {
        password.push(newInput.value);
      }
    }

    if (password.length === 1) {
      for (const newInput of InputPassword) {
        newInput.setCustomValidity("");
      }
    } else {
      for (const newInput of InputPassword) {
        newInput.setCustomValidity("password are differents");
      }
    }
  }

  attachEventListener() {
    this.element.addEventListener("submit", async function (event) {
      event.preventDefault();
      //this es el formulario
      if (this.checkValidity()) {
        try {
          const data = new FormData(this); //recoge datos del formulario
          const username = data.get("username");
          const password = data.get("password");

          const finalResult = await DataService.newUserRegister(
            username,
            password
          );
          PubSub.publish(
            PubSub.events.SHOW_SUCCESS,
            `the user ${username} is correctly registered`
          );
        } catch (e) {
          PubSub.publish(PubSub.events.SHOW_ERROR, e);
        }
        //location.href = "/";
      } else {
        let errorMessage = "";
        for (const element of this.elements) {
          if (element.validity.valid === false) {
            errorMessage += `Error in ${element.name} : ${element.validationMessage}`;
          }
        }
        PubSub.publish(PubSub.events.SHOW_ERROR, errorMessage);
      }
    });

    this.element.querySelectorAll('input[type="password"]').forEach((input) => {
      input.addEventListener("input", () => {
        this.checkIfPasswordsAreEqual();
      });
    });

    //validar que los inputs tengan contenido validado para activar button
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
