class Vehicle {
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

const vehicle = new Vehicle();

const car = new Car();
car.startDriving();
