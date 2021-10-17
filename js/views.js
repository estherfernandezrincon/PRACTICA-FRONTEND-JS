export function showNews(news) {
  return `<a href="/detail.html?id=${news.id}">
    <div class="post">
  
      <strong class="div">${news.item}</strong>
      <p class="precio">${news.price}</p>

      <h2 class="estado">${news.sale}</h2>

   </div>
  
  </a>`;
}

export function errorView(e) {
  return `<div class="error">${e}
  <button>Close</button>
  </div>`;
}

export function successView(message) {
  return `<div class="success">${message}
  <button>Close</button>
  </div>`;
}

export function welcome(message) {
  return `<div class="welcome">${message}
  <button>Close</button>
  </div>`;
}

export function loaderView() {
  //pintamos el loader
  return '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';
}

export function detail(news) {
  if (news === null) {
    return "<h1>there are not news to show</h1>";
  }
  let btn = "";
  if (news.canBeDeleted) {
    btn = '<button class="delete">DELETE</button>';
  }
  return `

      <strong class="div">${news.item}</strong>
      <p class="precio">${news.price}</p>
      <h2 class="estado">${news.sale}</h2>
      ${btn}
  
  `;
}
