interface Car {
	name: string;
	date: Date;
	broken: boolean;
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

// First example of interface
const printVehicle = (vehicle: Car) => {
	if (!vehicle.broken) {
		console.log(
			`Model is ${vehicle.name[0].toUpperCase() + vehicle.name.slice(1)} with date of ${vehicle.date}`,
		);
	}

	// Using summary
	console.log(vehicle.summary());
};

printVehicle(oldCivic);
