class Vehicle {
	drive(): void {
		console.log("Wroom wroom");
	}

	honk(): void {
		console.log("Beep");
	}
}

class Car extends Vehicle {
	drive(): void {
		console.log("Drifting instead of wroom");
	}
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
car.honk();
