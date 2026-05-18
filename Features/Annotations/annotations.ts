let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "black", "blue"];
let myNumbers: number[] = [5, 15, 35];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
	x: 10,
	y: 20,
};

// Function
const logNumber: (num: number) => void = (num: number) => {
	console.log(num);
};

// When to use annotations
// 1) Function that return "any" type
const json = '{"x": 20, "y": 20}';
const coords: {
	x: number;
	y: number;
} = JSON.parse(json);

console.log("🚀 ~ coords:", coords);

// 2) When we declare a variable on one line and initialize it later
let words = ["red", "black", "green"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
	// console.log(words[i]);

	if (words[i] === "green") {
		foundWord = true;
		console.log(foundWord);
	}
}

// 3) When we want a variable to have a type that can't be inferred
let numbers = [-10, -1, 12];
let numbersAboveZero: number | boolean = false;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numbersAboveZero = numbers[i];
	} else {
		numbersAboveZero = false;
	}
}
