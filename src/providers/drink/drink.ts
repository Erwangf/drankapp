import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class DrinkProvider {

  drinks: Array<Drink> = [
    new Drink(1,
      "Grimbergen",
      "blonde",
      "12/07/2017",
      "berthold, Lyon 2",
      4,
      "assets/img/beer.jpg"
    )
  ];

  constructor() {

  }

  public getDrinkById(id: number): Observable<Drink> {
    const arrayFiltered = this.drinks.filter(v => v.id == id);
    if (arrayFiltered.length == 0) return null;
    else return of(arrayFiltered[0]);
  }

  public getAllDrinks(): Observable<Array<Drink>> {
    return of(this.drinks);
  }

  public getDrinksBySearchCriteria(searchCriteria: string): Observable<Array<Drink>> {
    return of(this.drinks.filter(d => d.toSearchStr().includes(searchCriteria)));
  }

  public addDrink(drink: Drink): Observable<Drink> {
    this.drinks.push(drink);
    return of(drink);
  }

  public deleteDrinkById(id: number): Observable<boolean> {
    this.drinks = this.drinks.filter(d => d.id != id);
    return of(true);
  }

  public deleteDrink(drink: Drink): Observable<boolean> {
    return this.deleteDrinkById(drink.id);
  }

  public updateDrink(drink: Drink): Observable<Drink> {
    let drinkToUpdate = this.drinks.find(d => d.id == drink.id);
    if (!drinkToUpdate) {
      return this.addDrink(drink);
    }
    drinkToUpdate = drink;
    return of(drink);
  }

}

export class Drink {
  id: number;
  brand: string;
  version: string;
  date: string;
  location: string;
  rate: number;
  image: string;

  public toSearchStr(): String {
    return this.id
      + "\n" + this.brand
      + "\n" + this.version
      + "\n" + this.date
      + "\n" + this.location;
  }


  constructor(id: number, brand: string, version: string, date: string, location: string, rate: number, image: string) {
    this.id = id;
    this.brand = brand;
    this.version = version;
    this.date = date;
    this.location = location;
    this.rate = rate;
    this.image = image;
  }
}
