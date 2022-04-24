import products from './data_old.js'

let countOfProductsInBasket = 0

let basket = localStorage.getItem('basket')
let basketProducts = basket && basket.length ? basket.split(',') : [] 

countOfProductsInBasket = basket && basket.length ? basket.split(',').length : 0

let basketCountList = document.querySelectorAll('.basket-count')

let basketProductList = document.querySelector('.basket-items')

if (basketProductList) {

basketProducts.forEach(function (id) {
    const product = products.find(x => x.id == id)
    basketProductList.innerHTML += `<article class="basket-product">
    <img src="${product.image}" alt="Emma bubble jacket">
    <section class="basket-item-info">
        <h3>${product.name}</h3>
        <section>
            <p>Size: M</p>
            <p>${product.material}</p>
        </section>
        <p>£${product.price}</p>
    </section>
    </article>`
})

const totalCost = products.reduce((x, y) => {
    return x.price + y.price
})


console.log(totalCost)

basketProductList.innerHTML += `<section class="price-info-desktop">
<section><p>Shipping</p><p>£3.99</p></section>
<section><p>Total</p><p>£${totalCost}</p></section>
</section>`

}

// init state
basketCountList.forEach(function (basketCount) {
    basketCount.style.visibility = countOfProductsInBasket <= 0 ? 'hidden' : 'visible'
    basketCount.innerHTML = countOfProductsInBasket
})

let localStorageCart = []

function addToBasket() {
    const params = new URLSearchParams(window.location.search)

    if (localStorage.getItem('basket') && localStorage.getItem('basket').length > 0) {
        localStorageCart = localStorage.getItem('basket').split(',')
    }

    const productId = params.get('id')

    localStorageCart.push(productId)
    localStorage.setItem('basket', [...localStorageCart])

    countOfProductsInBasket = localStorageCart.length
    basketCountList.forEach(function (basketCount) {
        basketCount.style.visibility = countOfProductsInBasket > 0 ? 'visible' : 'hidden'  
        basketCount.innerHTML = countOfProductsInBasket
    })
}

function getItems () {
    console.log(data)
}

let button = document.getElementById('buyButton')

if (button) {
    button.addEventListener('click', addToBasket)
}