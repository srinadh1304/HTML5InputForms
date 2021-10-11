const NAME_REGEX = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
const PHONE_REGEX = RegExp('^[0-9]{1,2}\\s{1}[0-9]{10}$');
const EMAIL_REGEX = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");
const PASSWORD_REGEX = RegExp('^[a-zA-Z0-9]*[@#$%^&-+=()]*[a-zA-Z0-9]{8,}$')
text.addEventListener('input', function() {
    if (NAME_REGEX.test(text.value)) {
        textError.textContent = "";
    } else {
        textError.textContent = "Incorrect Name";
    }
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
})
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function() {
    if (EMAIL_REGEX.test(email.value)) {
        emailError.textContent = "";
    } else {
        emailError.textContent = "Invalid Email";
    }
});

const telephone = document.querySelector('#tel');
const telephoneError = document.querySelector('.tel-error');
telephone.addEventListener('input', function() {
    if (PHONE_REGEX.test(telephone.value)) {
        telephoneError.textContent = "";
    } else {
        telephoneError.textContent = "TELEPHONE NUMBER Is Incorrect";
    }
});

const password = document.querySelector('#pwd');
const passwordError = document.querySelector('.pwd-error');
password.addEventListener('input', function() {
    if (PASSWORD_REGEX.test(password.value)) {
        passwordError.textContent = "";
    } else {
        passwordError.textContent = "PASSWORD Is Incorrect";
    }
});