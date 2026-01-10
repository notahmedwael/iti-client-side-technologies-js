var tableBody = document.querySelector('tbody');
var addButton = document.querySelector('#add');
var resetButton = document.querySelector('#reset');

var nameInput = document.querySelector('#name-input');
var ageInput = document.querySelector('#age-input');
var emailInput = document.querySelector('#email-input');
var errorTexts = document.querySelectorAll('.error-text');

var nameRegex = /^[a-zA-Z\s]+$/;
var ageRegex = /^(1[0-1][0-9]|120|[1-9][0-9]?)$/;
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function reset() {
    nameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";

    nameInput.classList.remove('error');
    ageInput.classList.remove('error');
    emailInput.classList.remove('error');

    for (var i = 0; i < errorTexts.length; i++) {
        errorTexts[i].style.display = 'none';
        errorTexts[i].textContent = "";
    }
}

function validateName() {
    if (!nameRegex.test(nameInput.value)) {
        errorTexts[0].style.display = 'block';
        errorTexts[0].textContent = "Name input should only contain letters and spaces.";
        nameInput.classList.add('error');
        return false;
    } else {
        errorTexts[0].style.display = 'none';
        errorTexts[0].textContent = "";
        nameInput.classList.remove('error');
        return true;
    }
}

function validateAge() {
    if (!ageRegex.test(ageInput.value)) {
        errorTexts[1].style.display = 'block';
        errorTexts[1].textContent = "Age should be a number between 1 and 119";
        ageInput.classList.add('error');
        return false;
    } else {
        errorTexts[1].style.display = 'none';
        errorTexts[1].textContent = "";
        ageInput.classList.remove('error');
        return true;
    }
}

function validateEmail() {
    if (!emailRegex.test(emailInput.value)) {
        errorTexts[2].style.display = 'block';
        errorTexts[2].textContent = "Email should be in the following form: johndoe@example.com";
        emailInput.classList.add('error');
        return false;
    } else {
        errorTexts[2].style.display = 'none';
        errorTexts[2].textContent = "";
        emailInput.classList.remove('error');
        return true;
    }
}

function add() {
    var isNameValid = validateName();
    var isAgeValid = validateAge();
    var isEmailValid = validateEmail();

    if (isNameValid && isAgeValid && isEmailValid) {
        appendUser({
            name: nameInput.value,
            age: ageInput.value,
            email: emailInput.value
        });
    } else {
        alert("Complete the form correctly please.");
    }
}

function appendUser(user) {
    var tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
    `;

    tableBody.appendChild(tr);
    reset();
}

nameInput.addEventListener("change", validateName);
ageInput.addEventListener("input", validateAge);
emailInput.addEventListener("change", validateEmail);

addButton.addEventListener("click", add);
resetButton.addEventListener("click", reset);