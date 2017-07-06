import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { PeriodPricesServiceProvider } from '../../providers/period-prices-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	travel: string = "flights";

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  public modalCtrl: ModalController,
              public periodService: PeriodPricesServiceProvider
  ) {

      console.log(periodService.getPeriodPrices({}));
  }

  showModal() {
      const modal = this.modalCtrl.create('ModalPage');
      modal.present();
  }

}
