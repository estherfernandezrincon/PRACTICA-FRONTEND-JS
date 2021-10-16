import LoaderController from "./controllers/loaderController.js";
import DetailController from "./controllers/detailController.js";

window.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".loader");
  new LoaderController(loader);

  //obtenemos el id del anuncio que seleccionamos
  const id = new URLSearchParams(window.location.search).get("id");

  //instancia del controlador del detalle de anuncio
  const anuncio = document.querySelector(".news");
  new DetailController(anuncio, id);
});
