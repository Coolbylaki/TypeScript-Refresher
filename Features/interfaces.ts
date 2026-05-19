interface Reportable {
	summary(): string;
}

const oldCivic = {
	name: "civic",
	date: new Date(),
	broken: false,
	summary(): string {
		return `Name ${this.name} with date of ${this.date}`;
	},
};

const drink = {
	color: "red",
	carbonated: true,
	sugarContent: 40,
	summary(): string {
		return `My drink has ${this.sugarContent} grams of sugar`;
	},
};

// First example of interface
const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
