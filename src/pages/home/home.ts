import { Component } from '@angular/core';
import { PlatformLocation } from '@angular/common'

import { IonicPage,NavController, NavParams, ModalController, Platform } from 'ionic-angular';
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

  public destinationModal: any;
  public dateModal: any;
  public passengerModal: any;
  public searchFlightModal: any;

  public destinationModalOpen = false;
  public dateModalOpen = false;
  public passengerModalOpen = false;
  public searchFlightModalOpen = false;


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
          public calendarCtrl: CalendarController,
          public platform: Platform,
          public location: PlatformLocation
  ) {

    location.onPopState(() => {
      if(this.destinationModalOpen){
        this.destinationModal.dismiss();
      };

      if(this.dateModalOpen){
        this.dateModal.dismiss();
      };

      if(this.passengerModalOpen){
        this.passengerModal.dismiss();
      };

      if(this.searchFlightModalOpen){
        this.searchFlightModal.dismiss();
      };

    });

      this.dates.return_date_show = false;
      let b: Date = new Date();
      this.dates.depart_date = b.toString().substring(0, 10);
      this.dates.return_date = new Date(b.getFullYear(), b.getMonth(), b.getDate() + 9).toString().substring(0, 10);


  }

  showModal(searchType) {
      this.searchType = searchType;

      this.destinationModal = this.modalCtrl.create('ModalPage',{
        departure: this.departure,
        destination: this.destination,
        searchType: searchType
      });
      this.destinationModalOpen = true;

      this.destinationModal.present();
      this.destinationModal.onDidDismiss((data)=> {
        //console.log(data);
        this.destinationModalOpen = false;

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
      this.passengerModal = this.modalCtrl.create('PassengersPage',{
        passengers: this.passengers
      });

      this.passengerModalOpen = true;

      this.passengerModal.present();
  }

  showComingSoon() {
      const modal = this.modalCtrl.create('ComingSoonPage');
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
