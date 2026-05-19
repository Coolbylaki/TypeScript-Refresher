const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
const ford = carMakers[0];

// Non null assertion so it doesn't return string | undefined
if (carMakers.length > 0) {
	const myCar = carMakers.pop()!;
	console.log(myCar);
}

// Prevent incompatible values
// carMakers.push(100);

// Help with "map"
carMakers.map((car: string): string => {
	console.log(car.toUpperCase());

	return car;
});

// Flexible types
const importantDates: (Date | string)[] = ["23-04-2026"];
importantDates.push(new Date().toLocaleDateString());

importantDates.map((date) => {
	console.log(date);
});
