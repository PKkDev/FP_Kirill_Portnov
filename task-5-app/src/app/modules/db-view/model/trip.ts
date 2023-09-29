import { Persona } from "./persona";

export class Trip {
    public name: string;
    public start: string;
    public end: string;

    public persons: Persona[];

    constructor(name: string, start: string, end: string) {
        this.name = name;
        this.start = start;
        this.end = end;

        this.persons = [];
    }
}