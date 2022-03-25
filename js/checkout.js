const form = document.querySelector("#checkout-form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const givenName = document.querySelector("#given-name");
const givenNameError = document.querySelector("#given-name-error");
const surname = document.querySelector("#surname");
const smurnameError = document.querySelector("#surname-error");
const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");
const address2 = document.querySelector("#flat-house");
const address2Error = document.querySelector("#flat-house-error");
const city = document.querySelector("#city");
const cityError = document.querySelector("#city-error");
const postcode = document.querySelector("#postcode");
const postcodeError = document.querySelector("#postcode-error");


function validateForm(event) {
    event.preventDefault();

    nameError.style.display = this.name.value.trim().length < 1 ? "block" : "none";
    messageError.style.display = this.message.value.trim().length < 10 ? "block" : "none";
    emailError.style.display = !validateEmail(email.value) ? "block" : "none";
    adressError.style.display = this.adress.value.trim().length < 25 ? "block" : "none";
}

form.addEventListener ("submit", validateForm);

const validateEmail = (email) => {
    const regEx = /\S+@\S+\.\S+/;
    const expressionMatches = regEx.test(email);
    return expressionMatches;
}