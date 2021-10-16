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

    return news;
  },
  getNews: async function () {
    const url = "http://localhost:8000/api/news";
    const response = await fetch(url);
    if (response.ok) {
      const allNews = await response.json();

      return allNews.map((news) => {
        this.parseNews(news);
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

  post: async function (url, body) {
    const requestConfig = {
      method: "POST",
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
    //si el usuario esta ya registrado mostramos el mensaje de banckend
    try {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw error;
    }
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
};
