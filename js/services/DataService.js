export default {
  parseNews: function (news) {
    //para evitar ser hackeado

    news.item = news.item
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    news.sale = news.sale
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    news.price = news.price
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    //para que se pueda o no borrar el anuncio. Si el anuncio tiene propiedad canBeDeleted y es true se puede borrar
    news.canBeDeleted = news.userId === this.getAuthUserId();

    return news;
  },
  getNews: async function () {
    const url = "http://localhost:8000/api/news";
    const response = await fetch(url);
    if (response.ok) {
      const allNews = await response.json();

      return allNews.map((news) => {
        return this.parseNews(news);
      });
    } else {
      throw new Error("Something was wrong ");
    }
  },

  getAnuncioDetail: async function (newsId) {
    const url = `http://localhost:8000/api/news/${newsId}`;
    const response = await fetch(url);
    if (response.ok) {
      const news = await response.json();
      return this.parseNews(news);
    } else {
      throw new Error("Something was wrong");
    }
  },

  request: async function (method, url, body) {
    const requestConfig = {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    };
    if (this.isAuthenticated()) {
      const token = localStorage.getItem("AUTH_TOKEN");
      requestConfig.headers["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(url, requestConfig);

    try {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (e) {
      throw e;
    }
  },

  delete: async function (url, body = {}) {
    return await this.request("DELETE", url, body);
  },

  post: async function (url, body) {
    return await this.request("POST", url, body);
  },

  newUserRegister: async function (username, password) {
    const url = "http://localhost:8000/auth/register";
    return await this.post(url, { username, password });
  },

  //funcion de login igual que register salvo la url
  login: async function (username, password) {
    const url = "http://localhost:8000/auth/login";
    const data = await this.post(url, { username, password });
    //alamacenamos el token para poder autenticarnos
    localStorage.setItem("AUTH_TOKEN", data.accessToken);
  },

  isAuthenticated: function () {
    //si tenemos el token en local stoge estamos autenticados
    return localStorage.getItem("AUTH_TOKEN") !== null;
  },

  addNew: async function (item, sale, price) {
    const url = "http://localhost:8000/api/news";
    return await this.post(url, {
      item,
      sale,
      price,
    });
  },

  deleteNews: async function (newsId) {
    const url = `http://localhost:8000/api/news/${newsId}`;
    return await this.delete(url);
  },

  getAuthUserId: function () {
    const token = localStorage.getItem("AUTH_TOKEN");
    if (token === null) {
      return null;
    }
    const b64slices = token.split("."); // partimos tken por puntos
    if (b64slices.length !== 3) {
      //si no tiene 3 partes no es correcto
      return null;
    }
    const b64data = b64slices[1];
    try {
      const userJSON = atob(b64data);
      const user = JSON.parse(userJSON);
      return user.userId;
    } catch (e) {
      console.log("error in decoding token", e);
      return null;
    }
  },
};
