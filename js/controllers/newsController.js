import DataService from "../services/DataService.js";
import { showNews } from "../views.js";

export default class NewsController {
  constructor(element, errorMessageController) {
    this.element = element;
    this.errorMessageController = errorMessageController;
  }

  async renderNews() {
    try {
      const myNews = DataService.getNews();
      for (const news of myNews) {
        const newsElement = document.createElement("article");

        newsElement.innerHTML = showNews(news);
        this.element.appendChild(newsElement);
      }
    } catch (error) {
      this.errorMessageController.showError(error);
    }
  }
}
