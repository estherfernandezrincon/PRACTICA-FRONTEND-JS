import PubSub from "../services/Pubsub.js";
import DataService from "../services/DataService.js";

export default class AddNewController {
  constructor(element) {
    this.element = element;
    this.attachEventListener();
  }

  attachEventListener() {
    this.element.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (this.element.checkValidity()) {
        const data = new FormData(this.element);
        const item = data.get("item");
        const sale = data.get("sale");
        const price = data.get("price");
        console.log(price);

        try {
          const finalResult = await DataService.addNew(item, sale, price);
          PubSub.publish(PubSub.events.SHOW_SUCCESS, "New item registered");
        } catch (e) {
          PubSub.publish(PubSub.events.SHOW_ERROR, e);
        }
      }
    });
  }
}
