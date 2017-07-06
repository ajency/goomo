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

    private dates: any = {};

    private calendarOptions: any = {
        canBackwardsSelected:true,
        isSaveHistory:true,
        showYearPicker:true,
        closeIcon: true,
        from: new Date(),
/*        to  : new Date(),*/
        isRadio : false,
        weekdaysTitle : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
    }

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  public modalCtrl: ModalController,
              public calendarCtrl: CalendarController
  ) {

  }

  showModal() {
      const modal = this.modalCtrl.create('ModalPage');
      modal.present();
  }

    openCalendar(){
        this.calendarCtrl.openCalendar(
                this.calendarOptions
        ).then( (res:any) => {

                console.log(res.to.time);
                console.log(res.from.time);
                console.log(moment(1454521239279).format("DD MMM YYYY hh:mm a"));
                console.log(moment("1454521239279", "x").format("DD MMM YYYY hh:mm a"));
                console.log(moment.unix(1454521239279/1000).format("DD MMM YYYY hh:mm a"));

                this.dates.depart_date = res.to.time;
                this.dates.return_date = res.from.time;
        })
        .catch( () => {} );

    }

  showPassengers() {
      const modal = this.modalCtrl.create('PassengersPage');
      modal.present();
  }

}
