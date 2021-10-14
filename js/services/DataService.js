const url = "http://localhost:8000/api/news";

export default {
  getNews: async function () {
    const response = await fetch(url);
    if (response.ok) {
      const allNews = await response.json();
      return allNews;
    } else {
      throw new Error("Error al cargar los anuncios");
    }
  },

  newUserRegister: async function (username, password) {
    const url = "http://localhost:8000/auth/register";
    const requestConfig = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };

    const response = await fetch(url, requestConfig);
    //si el usuario esta ya registrado mostramos el mensaje de banckend
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

  //funcion de login igual que register salvo la url
  login: async function (username, password) {
    const url = "http://localhost:8000/auth/login";
    const requestConfig = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };

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

  isAuthenticated: function () {
    //si tenemos el token en local stoge estamos autenticados
    return localStorage.getItem("AUTH_TOKEN") !== null;
  },
};
