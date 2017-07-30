import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Drink} from "../../providers/drink/drink";


@Component({
  selector: 'page-drink-details',
  templateUrl: 'drink-details.html',
})
export class DrinkDetailsPage {

  drink:Drink;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.drink = this.navParams.get("drink")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinkDetailsPage');
  }

  private getArrayNum(num) {
    return new Array(num);
  }

}
