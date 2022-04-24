export function createErrorMessage(error) {
    let errorDiv = document.querySelector(".error");
    errorDiv.innerHTML = "An error has occured: " + error;
}

const constructColorAttribute = function(product) {
    const colors = getColors();
    let colorsLinks = ''
    colors.forEach((color) => {
        colorsLinks += `<a class="${color}" href="#"></a>`
    })
    return colorsLinks
}

const getColors = function (product) {
    if (product.attributes.length) {
        const colorAttribute = product.attributes.find(x => x.name == 'Colour')

        if (!colorAttribute) {
            return null;
            
        }

        if (!colorAttribute.options) {
            return null;
        }

        return colorAttribute.options
    }

    return null
}

const getColorsText = function (product) {
            const colors = getColors(product)
            if (colors.length > 2) {
                const previousLength = colors.length;
                return `Colour: ${[...colors.splice(0,2)]
                    .toString().replaceAll(',', ', ')} + ${previousLength - 2}`
            }

            return `Colour: ${[...colors].toString().replaceAll(',', ', ')}`
}

export function createProductCard(product) {
    return `
    <section class="article-container">
        <a href="product.html?id=${product.id}">
            <article>
                <h3>${product.name}</h3>
                <img src="${product.images.length > 0 ? product.images[0].src : 'images/product-1.jpg'}" alt="${product.short_description}">
                <section class="product-info">
                    <h4>${product.name}</h4>
                    <p>${product.attributes.length ? getColorsText(product) : ''}</p>
                    <p>£${product.price}</p>
                </section>
            </article>
        </a>
    </section>
    `

    // return `
    // <a href="product.html?id=${products.id}" class="product-card"> 
    //     <img src="${constructedImages(products.images)}" alt="${products.name}">
    //     <div class="details">                                    
    //         <h3>${products.name}</h3>
    //         <ul>
    //             <li>${constructedColours(products.attributes.options)}</li>
    //             <li>${products.price}</li>
    //         </ul>
    //     </div>
    // </a>
    // `
}

const constructedColours = function(colours) {
    let constructedHTML = "";
    if (colours === null || colours === undefined || !colours.length) {
        return "One colour"
    } 
    console.log(colours);
    colours.forEach(function(colour) {
        constructedHTML += `${colour !== null ? `${colour}` : "One colour"}`;
    })
    return constructedHTML;
}

const constructedImages = function(images) {
    let constructedHTML = "";
    if (images === null || images === undefined) {
        return ""
    } 
    console.log(images);
    images.forEach(function(image) {
        constructedHTML += `${image !== null ? `${image.src}` : ""}`;
    })
    return constructedHTML;
}