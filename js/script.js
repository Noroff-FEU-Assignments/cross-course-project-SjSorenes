import {createProductCard} from "./constructions.js";
import api from "./data.js";

const products = await api.fetchProducts()

let productContainer = document.querySelector("#product-container");

productContainer.innerHTML = "";

products.forEach(function (product) {
    productContainer.innerHTML += createProductCard(product)
})