import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main'
/**
 * Generated class for the BulkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bulk',
  templateUrl: 'bulk.html',
})
export class BulkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BulkPage');
  }

  Single() {
    console.log("Second")
    this.navCtrl.setRoot(MainPage);
  }

}
