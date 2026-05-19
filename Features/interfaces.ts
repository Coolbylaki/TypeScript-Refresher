interface Reportable {
	// name: string;
	// date: Date;
	// broken: boolean;
	printSummary(): string;
}

const oldCivic = {
	name: "civic",
	date: new Date(),
	broken: false,
	printSummary(): string {
		return `Name ${this.name} with date of ${this.date}`;
	},
};

// First example of interface
const printVehicle = (item: Reportable) => {
	// if (!vehicle.broken) {
	// 	console.log(
	// 		`Model is ${vehicle.name[0].toUpperCase() + vehicle.name.slice(1)} with date of ${vehicle.date}`,
	// 	);
	// }

	// Using summary
	console.log(item.printSummary());
};

printVehicle(oldCivic);
