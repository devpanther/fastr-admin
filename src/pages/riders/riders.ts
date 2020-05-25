import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the RidersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-riders',
  templateUrl: 'riders.html',
})
export class RidersPage {
  myphoto: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RidersPage');
    if (this.myphoto == undefined) {
      this.myphoto = "https://res.cloudinary.com/giftie/image/upload/v1581496259/avatar_tnprvk.png";
    }
  }

  getImage() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log('error')
    });
  }

  Close() {
    this.navCtrl.pop();
  }

}
