import { fetchData } from "./fetchData.js";
import "./dark-mode.js";
import "./loader.js";
import { showProducts } from "./updateProduct.js";
showProducts();
const card = document.querySelector(".card");
const cardTitle = document.querySelector(".card-title");
const cardText = document.querySelector(".text");
const Prating = document.querySelector(".rating");
const Preview = document.querySelector(".review");
const img = document.querySelector(".card-img");
const priceOfProduct = document.querySelector(".priceOfProduct");
const discountPrice = document.querySelector(".discountPrice");
const addBtn = document.querySelector("#btn__add");
const textComment = document.querySelector("#comment");
const queryString = window.location.search;
const id = new URLSearchParams(queryString).get("id");
const commetnCard = document.querySelector(".comment__card");
const cardName = document.querySelector(".car-title");
const url = "https://dummyjson.com/product/" + id;
const commetnData = document.querySelector("#coment__data");

const showProduct = (product) => {
  const {
    thumbnail,
    title,
    description,
    price,
    discountPercentage,
    rating,
    reviews,
    comment,
  } = product;
  console.log();
  img.src = thumbnail;
  cardTitle.textContent = title;
  cardText.textContent = description;
  Prating.textContent = rating;
  priceOfProduct.textContent = `${price}$`;
  discountPrice.textContent = `${(price - (price / 100) * discountPercentage).toFixed(2)}`;
  Preview.textContent = `${reviews.length} Reviews`;
  textComment.textContent = `${reviews[0].comment}`;
  cardName.textContent = `${reviews[0].reviewerName}`;
  commetnData.textContent = `${reviews[0].date}`;
};

fetchData("https://dummyjson.com/product/" + id)
  .then((product) => {
    showProduct(product);
  })
  .catch((error) => {
    console.log(error);
  });
