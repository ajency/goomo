import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PassengersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-passengers',
  templateUrl: 'passengers.html',
})
export class PassengersPage {

  private passengers: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.passengers = this.navParams.get('passengers');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassengersPage');
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
    console.log(this.passengers);
  }

}
