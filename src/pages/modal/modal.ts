import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AirportsDetailsServiceProvider } from '../../providers/airports-details-service';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  private keyword = '';
  private destinations = [];
  private topDestinations: any = [];
  private departure: any;
  private destination: any;
  private searchType: any;
  private loadingAirports = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private airportServiceProvider: AirportsDetailsServiceProvider

  ) {

    this.departure = this.navParams.get('departure');
    this.destination = this.navParams.get('destination');
    this.searchType = this.navParams.get('searchType');
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    this.topDestinations = this.airportServiceProvider.getTopDestinations();
    //this.topDestinations = topDestinations.airports;
  }




  dismiss(data) {
    this.viewCtrl.dismiss();
  }

  searchAirports(){
    if(this.keyword.length<=1){
      this.destinations = [];
      return;
    }
    this.loadingAirports = true;
    var payload = {"keyword":this.keyword};
    this.airportServiceProvider.getAirportDetails(payload)
    .then((res) => {
      this.destinations = res.data;
      this.loadingAirports = false;
    })
    .catch((err) => {
      console.warn(err)
    });
  }


  selectDestination(destination){
    if(this.searchType == 'departure'){
      // this.departure = destination.iata +' - '+destination.name;
      this.departure = destination;
    }

    if(this.searchType == 'destination'){
      //this.destination = destination.iata +' - '+destination.name;
      this.destination = destination;
    }

    this.viewCtrl.dismiss({departure: this.departure, destination: this.destination});
  }



}
