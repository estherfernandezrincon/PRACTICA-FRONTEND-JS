export default class RegisterController {
  constructor(element) {
    this.element = element;
    this.attachEventListener();
  }

  checkIfPasswordsAreEqual() {
    const InputPassword = this.element.querySelector('input[type="password"]');
    console.log(InputPassword);
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
    this.element.addEventListener("submit", function (event) {
      alert("han pulsado");
      event.preventDefault();

      if (this.checkValidity()) {
        console.log("Successful Registration");
      } else {
        let errorMessage = "";
        for (const element of this.elements) {
          if (element.validity.valid === false) {
            errorMessage += `Error in ${element.name} : ${element.validationMessage}`;
          }
        }
        alert(errorMessage);
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
