const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");


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