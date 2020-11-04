function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(userInput) { // Takes an array
	return userInput.reduce((total, i) => total + i, 0);
}

function multiply (userInput) { // Takes an array
	return userInput.reduce((total, i) => total * i, 1);
}

function power(a,b) {
	return a ** b;
}

function factorial(a) {  // factorial(5)).toEqual(120);
	if (a == 0) {
		return 1
	}
	for (i = a - 1; i >= 1; i--) {
		a *= i;
	}
	return a;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}