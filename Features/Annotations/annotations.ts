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
const coords = JSON.parse(json);

console.log("🚀 ~ coords:", coords);
