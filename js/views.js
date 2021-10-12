export function showNews(news) {
  return `<div class="post">
    <strong class="div">${news.articulo}</strong>
    <p class="precio">${news.precio}</p>
    <h2 class="estado">${news.estado}</h2>
    <h3 class="actualizado">${news.actualizado}</h3>
    
</div>`;
}

export function errorView(error) {
  return `<div class="error">${error}
  <button>Close</button>
  </div>`;
}
