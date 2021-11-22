const message = "Hello world";

console.log(message);

function updateColor(value: number) {
	if (value > 0) {
		counter?.classList.add("positive");
	} else if (value < 0) {
		counter?.classList.add("negative");
	} else {
		counter?.classList.remove("positive", "negative");
	}
}

const counter = document.querySelector(".counter");
const incButton = document.querySelector(".inc");
const decButton = document.querySelector(".dec");
const resetButton = document.querySelector(".reset");

incButton?.addEventListener("click", () => {
	let counterValue = parseInt(counter?.textContent || "0");
	counterValue++;
	updateColor(counterValue);
	counter!.textContent = counterValue.toString();
});

decButton?.addEventListener("click", () => {
	let counterValue = parseInt(counter?.textContent || "0");
	counterValue--;
	updateColor(counterValue);

	counter!.textContent = counterValue.toString();
});

resetButton?.addEventListener("click", () => {
	updateColor(0);
	counter!.textContent = "0";
});
