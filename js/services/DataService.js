const showDate = new Date();
const today =
  showDate.getDate() +
  "-" +
  (showDate.getMonth() + 1) +
  "-" +
  showDate.getFullYear();

export default {
  getNews: function () {
    return [
      {
        articulo: "lampara",
        precio: "100",
        estado: "venta",
        actualizado: today,
      },

      {
        articulo: "mesa",
        precio: "200",
        estado: "compra",
        actualizado: today,
      },
      {
        articulo: "sofa",
        precio: "500",
        estado: "venta",
        actualizado: today,
      },
      {
        articulo: "jarron",
        precio: "200",
        estado: "venta",
        actualizado: today,
      },
    ];
  },
};

//     const url = "http://localhost:8000/api/news";
//     const response = await fetch(url);
//     if (response.ok) {
//       const allNews = await response.json();
//       return allNews;
//     } else {
//       throw new Error("Error al cargar los anuncios");
//     }
//   },
// };
