let countOfProductsInBasket = 0

let basketCountList = document.querySelectorAll('.basket-count')


// init state

basketCountList.forEach(function (basketCount) {
    basketCount.style.visibility = 'hidden'
})

function addToBasket() {
    countOfProductsInBasket++
    basketCountList.forEach(function (basketCount) {
        basketCount.style.visibility = countOfProductsInBasket > 0 ? 'visible' : 'hidden'  
        basketCount.innerHTML = countOfProductsInBasket
    })
}