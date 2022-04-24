import api from './data.js'
import {createProductCard} from "./constructions.js";

const tabs = document.querySelector('.pp-info-tabs')

const container = document.getElementsByClassName("product-page")[0]
container.style.visibility = 'hidden'

// import { createProductDetails } from "./constructions.js";

const queryString = document.location.search;

const constructColorAttribute = function(product) {
    const colors = getColors(product);
    let colorsLinks = ''
    colors.forEach((color) => {
        colorsLinks += `<a class="${color}" href="#"></a>`
    })
    return colorsLinks
}

const getColors = function (product) {
        if (product.attributes === undefined || !product.attributes.length) {
            return null;
        }

        const colorAttribute = product.attributes.find(x => x.name == 'Colour')

        if (!colorAttribute) {
            return null;
            
        }

        if (!colorAttribute.options) {
            return null;
        }

        return colorAttribute.options
}


const params = new URLSearchParams(queryString);

const id = params.get("id");
const product = await api.fetchProductById(id);
const similarProducts = await api.fetchSimilarProducts(id);


container.style.visibility = 'visible'

//title is not capitalized, look at if time
let title = document.querySelector("title");
title.innerHTML = product.name;


let productTitle = document.getElementById("productName")
let productLinkName = document.getElementById("productLinkName")
let productPrice = document.getElementById("productPrice")
let productDescription = document.getElementById("productDescription")
let productColor = document.getElementById("productColor")
let productImage = document.getElementById("productImage")
let productColorList = document.getElementById("productColorList")
let similarProductsList = document.getElementById("recommended")

if (product != null) {
    productTitle.innerHTML = product.name;
    productLinkName.innerHTML = product.name;
    productPrice.innerHTML = product.price + '£';
    productDescription.innerHTML = product.description;
    if (product.attributes.length) {
        const colors = getColors(product)

        if (colors != null) {
            productColor.innerHTML = `Colour: ${[...colors].toString().replaceAll(',', ', ')}`
        }
    }
    if (product.images.length ) {
        productImage.setAttribute('src', product.images[0].src)
        productImage.setAttribute('alt', product.short_description)
    }

    productColorList.innerHTML = constructColorAttribute(product) 

    if (similarProducts.length) {
        similarProducts.forEach((p) => {
            similarProductsList.innerHTML += createProductCard(p)
        })
    }

}





// let bestsellersList = document.querySelector('#bestsellers_temp')
// console.log(products)
// function loadBestsellers (products) {
//     products.forEach(function(product) {
        
//         bestsellersList.innerHTML += ` <section class="article-container">
//             <a href="product.html?id=${product.id}">
//                 <article>
//                     <h3>${product.name}</h3>
//                     <img src="${product.image}" alt="Light beige puffer jacket for women">
//                     <section class="product-info">
//                         <h4>${product.name}</h4>
//                         <p>${product.colourName}</p>
//                         <p>£${product.price}</p>
//                     </section>
//                 </article>
//             </a>
//         </section>`
//     })
// }

// loadBestsellers(products)