import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Drink, DrinkProvider} from "../../providers/drink/drink";

/**
 * Generated class for the AddDrinkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-drink',
  templateUrl: 'add-drink.html',
})
export class AddDrinkPage {

  private brand:string;
  private version:string;
  private location:string;
  private date:Date;
  private rate:number = 1;


  constructor(public navCtrl: NavController, public navParams: NavParams, public drinkProvider:DrinkProvider) {
  }

  private getArrayNum(num) {
    return new Array(num);
  }

  private addDrink():void{
    //validate data...

    //...

    //add drink

    this.drinkProvider
      .addDrink(new Drink(0,this.brand,this.version,this.date.toString(),this.location,5,""))
      .subscribe(newDrink=>{
        if(newDrink)alert("Succes !");
        this.drinkProvider.getAllDrinks().subscribe(v=>console.log(v));
      })
  }
}
