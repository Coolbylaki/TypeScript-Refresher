// Normal object
const drink = {
	color: "brown",
	carbonated: true,
	sugar: 40,
};

// Types alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];

// Meaning nothing. This is why tuple is bad
const carSpecs: [number, number] = [400, 3345];

// Better
const carStats = {
	horsePower: 400,
	weight: 3345,
};
