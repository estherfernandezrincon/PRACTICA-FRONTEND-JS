import PubSub from "../services/PubSub.js";
import DataService from "../services/DataService.js";
import { detail } from "../views.js/";

export default class DetailController {
  constructor(element, newsId) {
    this.element = element;
    this.loadAnuncio(newsId);
  }

  async loadAnuncio(newsId) {
    PubSub.publish(PubSub.events.SHOW_LOADING);
    try {
      const news = await DataService.getAnuncioDetail(newsId); // pedimos el anuncio

      this.element.innerHTML = detail(news); // mostramos el detalle
    } catch (e) {
      PubSub.publish(PubSub.events.SHOW_ERROR, e);
    } finally {
      //bloque que siempre se ejecuta, vaya bien o mal.
      PubSub.publish(PubSub.events.HIDE_LOADING);
    }
  }
}
