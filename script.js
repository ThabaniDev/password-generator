let passwordOptionsForm = document.querySelector("#password-generator-form");
let passwordOptions = {
	numbers: "123456789",
	uppercase: "ABCDEFGHIJKLMONPQRSTUVWXYZ",
	lowercase: "abcdefghijklmnopqrstuvwxyz",
	symbols: "~!@#$%&*_+\|][{}=-)(?",
};
let rangeInput = document.querySelector("#number-of-characters");

function updateRangeValue() {
	document.querySelector("#range-value").innerHTML = rangeInput.value;
}

passwordOptionsForm.addEventListener("submit", (e) => {
	e.preventDefault();

	let password = "";
	let chars = "";
	let numberOfCharacters = passwordOptionsForm["number-of-characters"].value;
	let uppercaseCheckbox = passwordOptionsForm["uppercase"].checked;
	let lowercaseCheckbox = passwordOptionsForm["lowercase"].checked;
	let numbersCheckbox = passwordOptionsForm["numbers"].checked;
	let specialCharactersCheckbox =
		passwordOptionsForm["symbols"].checked;

	if (numbersCheckbox) {
		chars += passwordOptions.numbers;
	}
	if (uppercaseCheckbox) {
		chars += passwordOptions.uppercase;
	}
	if (specialCharactersCheckbox) {
		chars += passwordOptions.symbols;
	}
	if (lowercaseCheckbox) {
		chars += passwordOptions.lowercase;
	}

	if (chars.length <= 0) {
		alert(
			"Please select at least one option\n1. Uppercase\n2. Lowercase\n3. Numbers\n4. Symbols"
		);
	} else {
		for (let i = 0; i < numberOfCharacters; i++) {
			index = Math.floor(Math.random() * chars.length);
			password += chars.charAt(index);
		}
	}

	document.querySelector("#password").value = password;
});

function copyPassword()
{
	let password = document.querySelector("#password").value;

	alert("Password copied to clipboard");
}