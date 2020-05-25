import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PickupPage } from '../pickup/pickup';
/**
 * Generated class for the DispatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dispatch',
  templateUrl: 'dispatch.html',
})
export class DispatchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DispatchPage');
  }

  Pickup() {
    this.navCtrl.setRoot(PickupPage)
  }

}
