import { Component, OnInit } from '@angular/core';
import { DbDataService } from './services/db-data.service';
import { Country } from './model/country';
import { CountryInfo } from './model/country-info';
import { Trip } from './model/trip';
import { Persona } from './model/persona';
import { Hiker } from './model/hiker';

@Component({
  selector: 'app-db-view',
  templateUrl: './db-view.component.html',
  styleUrls: ['./db-view.component.scss'],
  providers: [DbDataService]
})
export class DbViewComponent implements OnInit {

  public countries: Country[] = [];
  public selectedCountry: Country | null = null;

  public countryInfo: CountryInfo[] = [];
  public selectedCountryInfo: CountryInfo | null = null;

  public trips: Trip[] = [];

  public personas: Persona[] = [];
  public selectedPersona: Persona | null = null;

  public hikers: Hiker[] = [];

  constructor(private dataService: DbDataService) { }

  ngOnInit(): void {
    this.countries = this.dataService.getTestData();

    if (this.countries.length > 0) {
      this.selectCountry(this.countries[0]);
    }
  }

  public restoreData() {
    this.ngOnInit();
  }

  public selectCountry(country: Country) {
    this.selectedCountry = country;

    if (country.info) {
      this.countryInfo = [country.info];
      this.selectedCountryInfo = country.info;
    } else {
      this.countryInfo = [];
      this.selectedCountryInfo = null;
    }
    this.trips = country.trips;

    if (this.trips.length > 0) {
      this.selectTrip(this.trips[0]);
    }
  }

  public selectTrip(trip: Trip) {
    this.personas = trip.persons;

    if (this.personas.length > 0) {
      this.selectPersona(this.personas[0]);
    }
  }

  public selectPersona(persona: Persona) {
    this.selectedPersona = persona;

    this.hikers = persona.hikers;
  }


  public onUpdateCountryName() {
    if (this.selectedCountry) {
      this.selectedCountry.name = 'newName';
    }
  }

  public onUpdateCountryInfolang() {
    if (this.selectedCountryInfo) {
      this.selectedCountryInfo.language = 'ru';
    }
  }

  public onAddPersona() {
    const newPersona: Persona = new Persona('newLname', 'newFname', 5);
    this.personas.push(newPersona);
  }

  public onAddPersonaHiker() {
    const newHiker: Hiker = new Hiker('какая-то вещь', 5);
    this.hikers.push(newHiker);
  }

  public onDeletePersona() {
    if (this.personas.length > 0) {
      this.personas.shift();
      this.hikers = [];
    }
  }

  public onDeletePersonaHiker() {
    if (this.hikers.length > 0)
      this.hikers.shift();
  }

}
