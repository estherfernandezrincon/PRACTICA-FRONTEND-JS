export function showNews(news) {
  return `<div class="post">
    <strong class="div">${news.articulo}</strong>
    <p class="precio">${news.precio}</p>
    <h2 class="estado">${news.estado}</h2>

    
</div>`;
}

export function errorView(message) {
  return `<div class="error">${message}
  <button>Close</button>
  </div>`;
}

export function successView(message) {
  return `<div class="success">${message}
  <button>Close</button>
  </div>`;
}
