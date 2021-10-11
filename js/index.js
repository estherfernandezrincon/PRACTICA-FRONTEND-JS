import NewsController from "./controllers/newsController.js";
import ErrorMessageController from "./controllers/errorMessageController.js";

window.addEventListener("DOMContentLoaded", function () {
  const error = document.querySelector(".error-message");
  const errorNews = new ErrorMessageController(error);

  const newsListHome = document.querySelector(".div-home");
  const newsListController = new NewsController(newsListHome, errorNews);

  newsListController.renderNews();
});
