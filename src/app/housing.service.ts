import { Injectable } from '@angular/core';
import {Housinglocation} from "./housinglocation";

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }

  url = 'https://serene-ravine-17663-6962461bc679.herokuapp.com/api/listings';

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
