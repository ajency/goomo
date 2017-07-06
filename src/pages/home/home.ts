import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
//import { PeriodPricesServiceProvider } from '../../providers/period-prices-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	travel: string = "flights";
  searchType: string = 'departure';
  private departure: any;
  private destination: any;

  private departureValue: any;
  private destinationValue: any;

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  public modalCtrl: ModalController
  ) {

      //console.log(periodService.getPeriodPrices({}));
  }

  showModal(searchType) {
      this.searchType = searchType;

      const modal = this.modalCtrl.create('ModalPage',{
        departure: this.departure,
        destination: this.destination,
        searchType: searchType
      });

      modal.present();
      modal.onDidDismiss((data)=> {
        //console.log(data);

        if(data){
        if(data.hasOwnProperty('departure')){
          if(data.departure){
            this.departure = data.departure;
            this.departureValue = data.departure.iata +' - '+data.departure.name;
          }
        }

        if(data.hasOwnProperty('destination')){
          if(data.destination){
            this.destination = data.destination;
            this.destinationValue = data.destination.iata +' - '+data.destination.name;
          }
        }
      }

      });
  }

}
