import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemitPage } from '../remit/remit'
/**
 * Generated class for the OwingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-owing',
  templateUrl: 'owing.html',
})
export class OwingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OwingPage');
  }

  Remit() {
    this.navCtrl.setRoot(RemitPage)
  }

}
