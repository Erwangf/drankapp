import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Drink, DrinkProvider} from "../../providers/drink/drink";
import {DrinkDetailsPage} from "../drink-details/drink-details";

/**
 * Generated class for the DrinkListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-drink-list',
  templateUrl: 'drink-list.html'
})
export class DrinkListPage {

  drinks:Array<Drink> =[];




  constructor(public navCtrl: NavController, public navParams: NavParams, public drinkProvider:DrinkProvider) {
    drinkProvider.getAllDrinks()
      .subscribe(drinkList=>{
        this.drinks=drinkList;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinkListPage');
  }

  goToDrinkDetails(d:Drink){
    this.navCtrl.push(DrinkDetailsPage,{drink:d});
  }



  private getArrayNum(num) {
    return new Array(num);
  }

}
