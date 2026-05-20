import { faker } from "@faker-js/faker";

export class Company {
	companyName: string;
	catchPhrase: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.companyName = faker.company.name();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			lat: faker.location.latitude(),
			lng: faker.location.longitude(),
		};
	}

	markerContent(): string {
		return `<div>
				<h2>Company Name: ${this.companyName}</h2>
				<h3>Catchphrase: ${this.catchPhrase}</h3>
			</div>
		`;
	}
}
