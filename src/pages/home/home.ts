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

      return new Promise((resolve,reject) => {

          this.periodService.getPeriodPrices({})
              .then((res) => {
                  resolve(res);
              })
              .catch((err) => {
                  reject(err)
              });
      });
  }

  showModal() {
      const modal = this.modalCtrl.create('ModalPage');
      modal.present();
  }

}
