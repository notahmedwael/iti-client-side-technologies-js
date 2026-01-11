const form = document.querySelector('form');
const resetButton = document.querySelector('#reset');
const submitButton = document.querySelector('#add');

const nameInput = document.querySelector('#name-input');
const emailInput = document.querySelector('#email-input');
const mobileInput = document.querySelector('#mobile-input');
const addressInput = document.querySelector('#address-input');
const titleSelect = document.querySelector('#title-select');

const errorTexts = [...document.querySelectorAll('.error-text')];
const inputs = [nameInput, emailInput, mobileInput, addressInput];

const patterns = {
    name: /^[a-zA-Z\s]{3,}$/,
    age: /^(1[0-1][0-9]|120|[1-9][0-9]?)$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    mobile: /^01[0125][0-9]{8}$/,
    address: /^.{5,}$/
};

// Reusable UI toggle for errors
const toggleError = (input, index, message, isValid) => {
    if (!isValid) {
        errorTexts[index].style.display = 'block';
        errorTexts[index].textContent = message;

        // Check if input exists (radio buttons are not selected by default)
        if(input) input.classList.add('error');
    } else {
        errorTexts[index].style.display = 'none';
        errorTexts[index].textContent = "";
        if(input) input.classList.remove('error');
    }
    return isValid;
};

// Index 0: Name
const validateName = () => toggleError(nameInput, 0, "Name must be at least 3 letters.", patterns.name.test(nameInput.value));

// Index 1: Email
const validateEmail = () => toggleError(emailInput, 1, "Invalid email format.", patterns.email.test(emailInput.value));

// Index 2: Gender
const validateGender = () => {
    const checkedGender = document.querySelector('input[name="gender"]:checked');
    return toggleError(null, 2, "Please select a gender.", !!checkedGender);
};

// Index 3: Mobile
const validateMobile = () => toggleError(mobileInput, 3, "Invalid mobile (e.g. 010xxxxxxxx).", patterns.mobile.test(mobileInput.value));

// Index 4: Address
const validateAddress = () => toggleError(addressInput, 4, "Address is too short.", patterns.address.test(addressInput.value));

const resetForm = () => {
    inputs.forEach(input => {
        input.value = "";
        input.classList.remove('error');
    });
    
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);
    
    titleSelect.selectedIndex = 0;
    errorTexts.forEach(err => {
        err.style.display = 'none';
        err.textContent = "";
    });
};

const timeoutDuration = 30000;
const idleTimer = setTimeout(() => {
    alert("TIMEOUT GOODBYE!");
    window.location.href="timeout.html";
}, timeoutDuration);

const handleSubmit = () => {
    const validations = [
        validateName(),
        validateEmail(),
        validateMobile(),
        validateAddress(),
        validateGender()
    ];

    const isFormValid = validations.every(res => res === true);

    if (isFormValid) {
        clearTimeout(idleTimer);

        const selectedGender = document.querySelector('input[name="gender"]:checked').value;

        const params = new URLSearchParams({
            title: titleSelect.value,
            name: nameInput.value,
            email: emailInput.value,
            mobile: mobileInput.value,
            address: addressInput.value,
            gender: selectedGender
        });

        window.location.href = `welcome.html?${params.toString()}`;
    }
};

nameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
mobileInput.addEventListener("blur", validateMobile);
addressInput.addEventListener("blur", validateAddress);

resetButton.addEventListener("click", resetForm);
submitButton.addEventListener("click", handleSubmit);