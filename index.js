const form = document.querySelector(".form")
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const password = document.querySelector("#password");
const email = document.querySelector("#email");


form.addEventListener("submit", event => {
event.preventDefault();
const firstNameError = document.querySelector(".first-error");
const lastNameError = document.querySelector(".last-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");


if (firstName.value === '' || firstName.value == null) {
    firstName.classList.add("error");
    firstName.placeholder = "";
    firstNameError.textContent = "First Name cannot be empty";
} else {
    firstName.classList.remove("error");
    firstNameError.innerHTML = "";
    firstName.placeholder = "First Name";
}

if (lastName.value === '' || lastName.value == null) {
    lastName.classList.add("error");
    lastName.placeholder = "";
    lastNameError.innerHTML = "Last Name cannot be empty";
} else {
    lastName.classList.remove("error")
    lastNameError.innerHTML = "";
    lastName.placeholder = "Last Name"
}

if (email.value === "" || email.value == null) {
    email.classList.add("error");
    email.placeholder = "email@example/com";
    emailError.innerHTML = "Looks like this is not an email";
} else {
    email.classList.remove("error");
    emailError.innerHTML = "";
    email.placeholder = "Email Address"
}

if (password.value === '' || password.value == null) {
    password.classList.add("error");
    password.placeholder = "";
    passwordError.innerHTML = "Password cannot be empty";
} else {
    password.classList.remove("error")
    passwordError.innerHTML = "";
    password.placeholder = "Password";
}

if (firstName.value && lastName.value && email.value && password.value) {
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
}

})
