import { Component } from '@angular/core';

import { IonicPage,NavController, NavParams, ModalController } from 'ionic-angular';
import {CalendarController } from "ion2-calendar";

declare var moment: any;

@IonicPage()
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

  private passengers = {
    adult: 1,
    children: 0,
    infants: 0,
    cabinClass: "economy"
  };



    private dates: any = {};
    private calendarOptions: any = {
        isSaveHistory:true,
        showYearPicker:true,
        closeIcon: true,
        weekdaysTitle : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        closeLabel : "Close",
        defaultDate : new Date(),
        title: "Select a Date"
    }

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  public modalCtrl: ModalController,
              public calendarCtrl: CalendarController
  ) {
      this.dates.return_date_show = false;


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

  openCalendar(){

      let b: Date = new Date();
      this.calendarOptions.from = new Date();
      this.calendarOptions.to  = new Date(b.getFullYear(), b.getMonth() + 3, 0);

      this.dates.return_date_show == true ? this.calendarOptions.isRadio = false : this.calendarOptions.isRadio = true;


      this.calendarCtrl.openCalendar(
                this.calendarOptions
        ).then( (res:any) => {

      /*                this.dates.depart_date = "Thu, 06 Jul";
                this.dates.return_date = "Thu, 30 Jul";*/

              if(this.calendarOptions.isRadio == true) {
                  this.dates.depart_date = new Date(res.date.time).toString().substring(0, 10);
              } else {
                  this.dates.depart_date = new Date(res.from.time).toString().substring(0, 10);
                  this.dates.return_date = new Date(res.to.time).toString().substring(0, 10);
              }
        })
        .catch( () => {} );

    }

  showPassengers() {
      const modal = this.modalCtrl.create('PassengersPage',{
        passengers: this.passengers
      });
      modal.present();
  }

  swapDestinations(){
    var departure = this.departure;
    var destination = this.destination;
    this.departure = destination;
    this.destination = departure;

    var departureValue = this.departureValue;
    var destinationValue = this.destinationValue;
    this.departureValue = destinationValue;
    this.destinationValue = departureValue;
  }
}
