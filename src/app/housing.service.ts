import { Injectable } from '@angular/core';
import {Housinglocation} from "./housinglocation";

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: Housinglocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      province: 'IL',
      photo: `${this.baseUrl}/bernard-hermant-CLKGGwIBTaY-unsplash.jpg`,
      availableUnits: 4,
      laundry: true,
      price: 1
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      province: 'CA',
      photo: `${this.baseUrl}/brandon-griggs-wR11KBaB86U-unsplash.jpg`,
      availableUnits: 0,
      laundry: true,
      price: 1
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      province: 'AK',
      photo: `${this.baseUrl}/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg`,
      availableUnits: 1,
      laundry: false,
      price: 1
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      province: 'IL',
      photo: `${this.baseUrl}/ian-macdonald-W8z6aiwfi1E-unsplash.jpg`,
      availableUnits: 1,
      laundry: false,
      price: 1
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      province: 'IN',
      photo: `${this.baseUrl}/krzysztof-hepner-978RAXoXnH4-unsplash.jpg`,
      availableUnits: 1,
      laundry: false,
      price: 1
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      province: 'CA',
      photo: `${this.baseUrl}/r-architecture-JvQ0Q5IkeMM-unsplash.jpg`,
      availableUnits: 2,
      laundry: true,
      price: 1
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      province: 'CA',
      photo: `${this.baseUrl}/phil-hearing-IYfp2Ixe9nM-unsplash.jpg`,
      availableUnits: 5,
      laundry: true,
      price: 1
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      province: 'CA',
      photo: `${this.baseUrl}/r-architecture-GGupkreKwxA-unsplash.jpg`,
      availableUnits: 2,
      laundry: true,
      price: 1
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      province: 'CA',
      photo: `${this.baseUrl}/saru-robert-9rP3mxf8qWI-unsplash.jpg`,
      availableUnits: 10,
      laundry: false,
      price: 1
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      province: 'OR',
      photo: `${this.baseUrl}/webaliser-_TPTXZd9mOo-unsplash.jpg`,
      availableUnits: 6,
      laundry: true,
      price: 1
    }
  ];

  getAllHousingLocations(): Housinglocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): Housinglocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
