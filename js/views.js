export function showNews(news) {
  return `<div class="post">
    <strong class="articulo">${news.articulo}</strong>
    <p class="precio">${news.precio}</p>
    <p class="estado">${news.estado}</p>
    <h3 class="actualizado">${news.actualizado}</h3>
    
</div>`;
}

export function errorView(error) {
  return `<div class="error">${error}
  <button>Close</button>
  </div>`;
}
