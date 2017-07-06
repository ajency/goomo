import { Component } from '@angular/core';
import { IonicPage,NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private travel: string = "flights";

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  public modalCtrl: ModalController
  ) {

  }

  showModal() {
      const modal = this.modalCtrl.create('ModalPage');
      modal.present();
  }
}
