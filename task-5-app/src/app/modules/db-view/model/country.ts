import { CountryInfo } from "./country-info";
import { Trip } from "./trip";

export class Country {
    public name: string;

    public trips: Trip[];
    public info: CountryInfo | null;

    constructor(name: string) {
        this.name = name;

        this.trips = [];
        this.info = null;
    }

}