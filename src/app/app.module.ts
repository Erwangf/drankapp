import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {DrinkListPage} from "../pages/drink-list/drink-list";
import {AddDrinkPage} from "../pages/add-drink/add-drink";
import {SettingsPage} from "../pages/settings/settings";
import { DrinkProvider } from '../providers/drink/drink';
import {DrinkDetailsPage} from "../pages/drink-details/drink-details";



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DrinkListPage,
    AddDrinkPage,
    SettingsPage,
    DrinkDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DrinkListPage,
    AddDrinkPage,
    SettingsPage,
  DrinkDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DrinkProvider
  ]
})
export class AppModule {}
