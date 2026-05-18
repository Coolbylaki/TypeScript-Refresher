const add = (a: number, b: number) => {
	return a + b;
};

const subtract = (a: number, b: number) => {
	return a - b;
};

function divide(a: number, b: number) {
	return a / b;
}

const multiply = function (a: number, b: number) {
	return a * b;
};

const logger = (msg: string): void => {
	console.log("🚀 ~ logger ~ msg:", msg);

	// return "You cannot return anything in void"
};

const throwError = (msg: string) => {
	if (!msg) {
		throw new Error(msg);
	}

	return msg;

	// return "Error will never reach past that point so it will never return anything"
};

const todaysWeather = {
	date: new Date(),
	weather: "sunny",
};

// Destructuring
const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
	console.log(date);
	console.log(weather);
};

//ES2015
// const logWeather = ({ date, weather }) => {
// 	console.log(date);
// 	console.log(weather);
// };

logWeather(todaysWeather);
