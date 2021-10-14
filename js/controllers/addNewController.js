import Pubsub from "../services/Pubsub.js";

export default class AddNewController {
  contructor(element) {
    this.element = element;
    this.attachEventListener();
  }

  attachEventListener() {
    this.element.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (this.element.checkValidity()) {
        const data = new FormData(this.element);
        const message = data.get("message");

        try {
          const finalResult = await DataService.AddNew(message);
          Pubsub.publish(Pubsub.events.SHOW_SUCCESS, "New item registered");
        } catch (e) {
          Pubsub.publish(Pubsub.events.SHOW_ERROR, e);
        }
      }
    });
  }
}
