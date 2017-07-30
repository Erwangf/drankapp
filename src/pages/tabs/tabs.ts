import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {AddDrinkPage} from "../add-drink/add-drink";
import {DrinkListPage} from "../drink-list/drink-list";
import {SettingsPage} from "../settings/settings";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHome = HomePage;
  tabAddDrink = AddDrinkPage;
  tabDrinkList = DrinkListPage;
  tabSettings = SettingsPage;

  constructor() {

  }
}
