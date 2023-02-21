const products = [
  {
    id: 1,
    name: "Product 1",
    description:
      "Descriptive words help paint a picture in the reader's mind. They can be adjectives, adverbs, or participles that describe the subjects or actions of your This is the first prodmfklwmflkw klmrwfkmlrkfmlkrem  kmel kmlml  lekmlu,.fe wlrf rvct",
    fromCountry: "USA",
    typeSort: "Type A",
    category: "Category 1",
    THC: 20,
    tasteSmell: "Citrus",
    price: 50,
    image: "https://example.com/product1.jpg",
    completedOrders: 100,
    rate: 4.5,
    bookmark: false,
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the second product",
    fromCountry: "Canada",
    typeSort: "Type B",
    category: "Category 2",
    THC: 15,
    tasteSmell: "Berry",
    price: 75,
    image: "https://example.com/product2.jpg",
    completedOrders: 50,
    rate: 4.0,
    bookmark: true,
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is the third product",
    fromCountry: "Mexico",
    typeSort: "Type A",
    category: "Category 1",
    THC: 25,
    tasteSmell: "Pine",
    price: 60,
    image: "https://example.com/product3.jpg",
    completedOrders: 200,
    rate: 4.8,
    bookmark: false,
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is the fourth product",
    fromCountry: "USA",
    typeSort: "Type C",
    category: "Category 3",
    THC: 18,
    tasteSmell: "Mint",
    price: 40,
    image: "https://example.com/product4.jpg",
    completedOrders: 75,
    rate: 4.3,
    bookmark: true,
  },
  {
    id: 5,
    name: "Product 5",
    description: "This is the fifth product",
    fromCountry: "Canada",
    typeSort: "Type A",
    category: "Category 1",
    THC: 22,
    tasteSmell: "Grape",
    price: 65,
    image: "https://example.com/product5.jpg",
    completedOrders: 150,
    rate: 4.7,
    bookmark: false,
  },
  {
    id: 6,
    name: "Product 6",
    description: "This is the sixth product",
    fromCountry: "Mexico",
    typeSort: "Type B",
    category: "Category 2",
    THC: 16,
    tasteSmell: "Vanilla",
    price: 55,
    image: "https://example.com/product6.jpg",
    completedOrders: 90,
    rate: 4.2,
    bookmark: false,
  },
  {
    id: 7,
    name: "Product 7",
    description: "This is the seventh product",
    fromCountry: "USA",
    typeSort: "Type A",
    category: "Category 1",
    THC: 24,
    tasteSmell: "Lemon",
    price: 70,
  },
];

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(products));
}

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("products")));
    }, 2000);
  });

const update = (id, data) =>
  new Promise((resolve) => {
    const products = JSON.parse(localStorage.getItem("products"));
    const productIndex = products.findIndex((u) => u.id === id);
    products[productIndex] = { ...products[productIndex], ...data };
    localStorage.setItem("products", JSON.stringify(products));
    resolve(products[productIndex]);
  });

  const getById = (id) =>
  new Promise((resolve) => {
      window.setTimeout(function () {
          resolve(
              JSON.parse(localStorage.getItem("products")).find(
                  (product) => product.id === id
              )
          );
      }, 1000);
  });



const API = {
 
  fetchAll,
  getById,
  update,
};
export default API;

// export default {
//     fetchAll,
//     getById,
//     update
// };

// const fetchAll = () =>
//   new Promise((resolve) => {
//     window.setTimeout(function () {
//       resolve(products);
//     }, 2000);
//   });

// const getById = (id) =>
//   new Promise((resolve) => {
//     window.setTimeout(function () {
//       resolve(goods.find((good) => good.id === id));
//     }, 1000);
//   });
// export default products;

// const goods = [
//   { id: 1, name: "Product 1", price: 10 },
//   { id: 2, name: "Product 2", price: 20 },
//   { id: 3, name: "Product 3", price: 30 },
//   { id: 4, name: "Product 4", price: 10 },
//   { id: 5, name: "Product 5", price: 20 },
//   { id: 6, name: "Product 6", price: 30 },
//   { id: 7, name: "Product 7", price: 20 },
//   { id: 8, name: "Product 8", price: 30 },
//   { id: 9, name: "Product 9", price: 20 },
//   { id: 10, name: "Product 10", price: 30 },
//   { id: 11, name: "Product 11", price: 10 },
//   { id: 12, name: "Product 12", price: 20 },
//   { id: 13, name: "Product 13", price: 30 },
//   { id: 14, name: "Product 14", price: 10 },
//   { id: 15, name: "Product 15", price: 20 },
//   { id: 16, name: "Product 16", price: 30 },
//   { id: 17, name: "Product 17", price: 10 },
//   { id: 18, name: "Product 18", price: 20 },
//   { id: 19, name: "Product 19", price: 30 },
//   { id: 20, name: "Product 20", price: 30 },
// ];

// export default goods
