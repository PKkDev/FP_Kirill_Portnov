import { Hiker } from "./hiker";

export class Persona {
    public fName: string;
    public lName: string;
    public age: number;

    public hikers: Hiker[];

    constructor(fName: string, lName: string, age: number) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;

        this.hikers = [];
    }
}