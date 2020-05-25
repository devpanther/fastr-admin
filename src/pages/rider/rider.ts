import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { RidersPage } from '../riders/riders';
/**
 * Generated class for the RiderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rider',
  templateUrl: 'rider.html',
})
export class RiderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl : AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiderPage');
  }

  addRider() {
    const modal = this.modalCtrl.create(RidersPage);
    modal.present();
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Delete Rider?',
      message: 'Are you sure you want to delete this Rider?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
