var numericField = document.querySelector("#numeric");

function checkNumeric(e) {
    var val = e.target.value;

    if (isNaN(val)) {
        // Replace any non numeric with an empty string
        e.target.value = val.replace(/[^0-9]/g, '');
    }
}

numericField.addEventListener("input", checkNumeric);