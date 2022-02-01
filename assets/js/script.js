let firstDigit = document.getElementById("f-digit");
let secondDigit = document.getElementById("s-digit");
let plusBtn = document.querySelector(".btn-primary");
let minusBtn = document.querySelector(".btn-danger");
let multiplyBtn = document.querySelector(".btn-success");
let divideBtn = document.querySelector(".btn-warning");
let resultInput = document.getElementById("result-input");
let icon = document.querySelector(".my-icon");

plusBtn.onclick = function () {
    let result = parseFloat(firstDigit.value) + parseFloat(secondDigit.value);
    resultInput.value = result;
}

minusBtn.onclick = function () {
    let result = parseFloat(firstDigit.value) - parseFloat(secondDigit.value);
    resultInput.value = result;
}

multiplyBtn.onclick = function () {
    let result = parseFloat(firstDigit.value) * parseFloat(secondDigit.value);
    resultInput.value = result;
}

divideBtn.onclick = function () {
    let result = parseFloat(firstDigit.value) / parseFloat(secondDigit.value);
    resultInput.value = result;
}

icon.onclick = function () {
    resultInput.value = "";
}