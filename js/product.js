import products from './data.js'

const tabs = document.querySelector('.pp-info-tabs')

let bestsellersList = document.querySelector('#bestsellers_temp')
console.log(products)
function loadBestsellers (products) {

    products.forEach(function(product) {
        bestsellersList.innerHTML += ` <section class="article-container">
            <a href="product.html?id=${product.id}">
                <article>
                    <h3>${product.name}</h3>
                    <img src="${product.image}" alt="Light beige puffer jacket for women">
                    <section class="product-info">
                        <h4>${product.name}</h4>
                        <p>${product.material}</p>
                        <p>£${product.price}</p>
                    </section>
                </article>
            </a>
        </section>`
    })
}

loadBestsellers(products)