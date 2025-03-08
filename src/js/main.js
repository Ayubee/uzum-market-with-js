import "./dark-mode.js";

import { fetchData } from "./fetchData.js";
import { showProducts } from "./updateProduct.js";
import { showCards } from "./updateUI.js";

showProducts();

fetchData("https://dummyjson.com/product")
  .then((data) => {
    showCards(data);
  })
  .catch((error) => {
    console.log(error);
  });
