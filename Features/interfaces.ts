interface Car {
	name: string;
	year: number;
	broken: boolean;
}

const oldCivic = {
	name: "civic",
	year: 2000,
	broken: false,
};

// First example of interface
const printVehicle = (vehicle: Car) => {
	if (!vehicle.broken) {
		console.log(
			`Model is ${vehicle.name[0].toUpperCase() + vehicle.name.slice(1)} with year of ${vehicle.year}`,
		);
	}
};

printVehicle(oldCivic);
