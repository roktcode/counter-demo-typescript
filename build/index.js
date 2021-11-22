"use strict";
var message = "Hello world";
console.log(message);
function updateColor(value) {
    if (value > 0) {
        counter === null || counter === void 0 ? void 0 : counter.classList.add("positive");
    }
    else if (value < 0) {
        counter === null || counter === void 0 ? void 0 : counter.classList.add("negative");
    }
    else {
        counter === null || counter === void 0 ? void 0 : counter.classList.remove("positive", "negative");
    }
}
var counter = document.querySelector(".counter");
var incButton = document.querySelector(".inc");
var decButton = document.querySelector(".dec");
var resetButton = document.querySelector(".reset");
incButton === null || incButton === void 0 ? void 0 : incButton.addEventListener("click", function () {
    var counterValue = parseInt((counter === null || counter === void 0 ? void 0 : counter.textContent) || "0");
    counterValue++;
    updateColor(counterValue);
    counter.textContent = counterValue.toString();
});
decButton === null || decButton === void 0 ? void 0 : decButton.addEventListener("click", function () {
    var counterValue = parseInt((counter === null || counter === void 0 ? void 0 : counter.textContent) || "0");
    counterValue--;
    updateColor(counterValue);
    counter.textContent = counterValue.toString();
});
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener("click", function () {
    updateColor(0);
    counter.textContent = "0";
});
