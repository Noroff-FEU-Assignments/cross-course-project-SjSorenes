import { createErrorMessage } from "./constructions.js";

const apiUrl = "https://theflowerpower.shop/rainydays//wp-json/wc/v3/";
const consumerKey = "ck_95a2d86e3033dfc27956284e25c875796c2f3868"
const consumerSecret = "cs_a411db1e7d9ac000955bfe38aaaddf6a9ec3bc12"

const appendConsumerSecretAndKey = function (url) {
    return url += `?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`
}

const fetchProducts = async function() {
    try {
        var url = apiUrl + 'products'
        const response = await fetch(`${appendConsumerSecretAndKey(url)}`);
        const products = await response.json();
        
        return products
    } catch (error) {
        createErrorMessage(error);
    }
}

const fetchProductById = async function (id) {
    try {
        var url = apiUrl + `products/${id}`
        const response = await fetch(`${appendConsumerSecretAndKey(url)}`);
        const product = await response.json();
        
        return product
    } catch (error) {
        createErrorMessage(error);
    }
}

const fetchSimilarProducts = async function (id ) {
    try {
        var url = apiUrl + 'products'
        const response = await fetch(`${appendConsumerSecretAndKey(url)}`);
        const products = await response.json();
        
        const compareProduct = products.find(x => x.id === parseInt(id))
        const categories = compareProduct.categories
        
        if(!compareProduct) {return products}

        return products.filter(x =>x.categories.find(c => c.name === categories[0].name)).filter(x => x.id !== parseInt(id))
    } catch (error) {
        createErrorMessage(error);
    }
}

export default {fetchProducts, fetchProductById, fetchSimilarProducts}