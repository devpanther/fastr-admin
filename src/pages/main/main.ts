import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DispatchPage } from '../dispatch/dispatch';
import { PickupPage } from '../pickup/pickup';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  Dispatch() {
    console.log("Second")
    this.navCtrl.setRoot(DispatchPage);
  }

  Pickup() {
    this.navCtrl.setRoot(PickupPage);
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MainPage, {
      item: item
    });
  }
}