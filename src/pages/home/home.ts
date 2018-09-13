import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '../../../node_modules/@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imagenCam;
  constructor(public navCtrl: NavController, private camera:Camera) {

  }
  tomarFoto(){
    let opciones:CameraOptions={
      quality: 100,
      encodingType: this.camera.EncodingType.JPEG,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    this.camera.getPicture(opciones).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imagenCam = base64Image;
    }, (err) => {
      // Handle error
    });
  }
}
