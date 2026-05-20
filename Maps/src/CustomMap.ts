import { User } from "./User";
import { Company } from "./Company";

// Instructions to every class how they can be argument to addMarker
interface Mappable {
	location: {
		lat: number;
		lng: number;
	};
}

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(divID: string) {
		this.googleMap = new google.maps.Map(document.getElementById(divID) as HTMLElement, {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0,
			},
		});
	}

	addMarker(mappable: Mappable): void {
		new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng,
			},
		});
	}
}
