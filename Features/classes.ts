class Vehicle {
	// color: string;

	// Shortcut
	constructor(public color: string) {
		// this.color = color;
	}

	protected honk(): void {
		console.log("Beep");
	}
}

class Car extends Vehicle {
	private drive(): void {
		console.log("Drifting instead of wroom");
	}

	startDriving(): void {
		this.drive();
		this.honk();
	}
}

const vehicle = new Vehicle("Orange");
console.log(vehicle.color);

const car = new Car("blue");
car.startDriving();
