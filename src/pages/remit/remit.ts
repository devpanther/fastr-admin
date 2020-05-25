import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OwingPage } from '../owing/owing'
/**
 * Generated class for the RemitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remit',
  templateUrl: 'remit.html',
})
export class RemitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemitPage');
  }

  Owing() {
    this.navCtrl.setRoot(OwingPage)
  }

}
