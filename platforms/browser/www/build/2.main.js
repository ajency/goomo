webpackJsonp([2],{

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ]
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion2_calendar__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, navParams, modalCtrl, calendarCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.calendarCtrl = calendarCtrl;
        this.travel = "flights";
        this.searchType = 'departure';
        this.dates = {};
        this.calendarOptions = {
            isSaveHistory: true,
            showYearPicker: true,
            closeIcon: true,
            weekdaysTitle: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            closeLabel: "Close",
            defaultDate: new Date()
        };
        this.dates.return_date_show = false;
    }
    HomePage.prototype.showModal = function (searchType) {
        var _this = this;
        this.searchType = searchType;
        var modal = this.modalCtrl.create('ModalPage', {
            departure: this.departure,
            destination: this.destination,
            searchType: searchType
        });
        modal.present();
        modal.onDidDismiss(function (data) {
            //console.log(data);
            if (data) {
                if (data.hasOwnProperty('departure')) {
                    if (data.departure) {
                        _this.departure = data.departure;
                        _this.departureValue = data.departure.iata + ' - ' + data.departure.name;
                    }
                }
                if (data.hasOwnProperty('destination')) {
                    if (data.destination) {
                        _this.destination = data.destination;
                        _this.destinationValue = data.destination.iata + ' - ' + data.destination.name;
                    }
                }
            }
        });
    };
    HomePage.prototype.openCalendar = function () {
        var _this = this;
        var b = new Date();
        this.calendarOptions.from = new Date();
        this.calendarOptions.to = new Date(b.getFullYear(), b.getMonth() + 1, 0);
        this.dates.return_date_show == true ? this.calendarOptions.isRadio = false : this.calendarOptions.isRadio = true;
        this.dates.depart_date = '';
        this.dates.return_date = '';
        this.calendarCtrl.openCalendar(this.calendarOptions).then(function (res) {
            /*                this.dates.depart_date = "Thu, 06 Jul";
                            this.dates.return_date = "Thu, 30 Jul";*/
            if (_this.calendarOptions.isRadio == true) {
                _this.dates.depart_date = new Date(res.date.time).toString().substring(0, 10);
            }
            else {
                _this.dates.depart_date = new Date(res.from.time).toString().substring(0, 10);
                _this.dates.return_date = new Date(res.to.time).toString().substring(0, 10);
            }
        })
            .catch(function () { });
    };
    HomePage.prototype.showPassengers = function () {
        var modal = this.modalCtrl.create('PassengersPage');
        modal.present();
    };
    HomePage.prototype.swapDestinations = function () {
        var departure = this.departure;
        var destination = this.destination;
        this.departure = destination;
        this.destination = departure;
        var departureValue = this.departureValue;
        var destinationValue = this.destinationValue;
        this.departureValue = destinationValue;
        this.destinationValue = departureValue;
    };
    return HomePage;
}());
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/ajantoniof/.bin/goomo/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n		<ion-title><img src="/assets/logo.png" /></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-horizontal>\n\n  <div>\n    <ion-segment [(ngModel)]="travel">\n      <ion-segment-button value="flights" >\n      	<img src="./assets/plane.png" width="50">\n        Flights\n      </ion-segment-button>\n      <ion-segment-button >\n      	<img src="./assets/holidays.png" width="50">\n        Holidays\n      </ion-segment-button>\n      <ion-segment-button >\n      	<img src="./assets/traders.png" width="50">\n        Tradefairs\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="travel">\n  	<ion-grid *ngSwitchCase="\'flights\'">\n  	  <ion-row class="return-toggle">\n  	  	<div>One-way</div>\n    	<ion-toggle [(ngModel)]="dates.return_date_show" class="custom-toggle"></ion-toggle>\n  	  	<div>Return</div>\n  	  </ion-row>\n\n  	  <div>\n\n  	  	<div class="search-wrapper">\n  	  	    <ion-item (click)="showModal(\'departure\')" class="city-select">\n  	  	      <p><span *ngIf="!departureValue">Select </span>Departure City</p>\n  	  	      <h2 *ngIf="departureValue">{{departure.city}}</h2>\n  	  	      <h6 *ngIf="departureValue">{{departureValue}}</h6>\n              <!-- <ion-input *ngIf="!departureValue" type="text"></ion-input> -->\n  	  	    </ion-item>\n\n  	  	    <ion-item (click)="showModal(\'destination\')" class="city-select">\n  	  	      <p><span *ngIf="!destinationValue">Select </span>Destination City</p>\n  	  	      <h2 *ngIf="destinationValue">{{destination.city}}</h2>\n  	  	      <h6 *ngIf="destinationValue">{{destinationValue}}</h6>\n              <!-- <ion-input *ngIf="!destinationValue" type="text"></ion-input> -->\n  	  	    </ion-item>\n\n  	  	    <button ion-fab mini icon-only round class="swap-button" [disabled]="!departureValue && !destinationValue" (click)="swapDestinations()">\n  	  	      <ion-icon name="swap"></ion-icon>\n  	  	    </button>\n  	  	</div>\n\n  	  	<div class="date-wrapper">\n  	  	  <ion-row>\n  	  	    <ion-col ngClass="{{ dates.return_date_show ? col-12 : col-6 }}">\n		  	    <ion-item (click)="openCalendar()" class="date-select">\n		  	      <p>Departure</p>\n		  	      <!-- <h2 >Thu, 06 Jul</h2> -->\n		  	      <h2>{{dates.depart_date}}</h2>\n		  	    </ion-item>\n  	  	    	<ion-icon name="calendar" class="cal-icon"></ion-icon>\n  	  	    </ion-col>\n  	  	    <ion-col col-6 *ngIf="dates.return_date_show">\n  	  	    	<ion-item (click)="openCalendar()" class="date-select">\n  	  	    	  <p>Return</p>\n  	  	    	  <h2>{{dates.return_date}}</h2>\n  	  	    	</ion-item>\n  	  	    	<ion-icon name="calendar" class="cal-icon"></ion-icon>\n  	  	    </ion-col>\n  	  	  </ion-row>\n  	  	</div>\n\n  	  	<div class="passenger-wrapper">\n  	  	  <ion-item (click)="showPassengers()" class="passenger-select">\n  	  	  	<p>Traveller &amp; Class</p>\n  	  	  	<h2>1 Adult, Economy</h2>\n  	  	  </ion-item>\n  	  	  <ion-icon name="person" class="cal-icon"></ion-icon>\n  	  	</div>\n\n  	  	  <button ion-button block large class="search-btn">Search Flights</button>\n  	  </div>\n  	</ion-grid>\n\n  	<ion-grid *ngSwitchCase="\'holidays\'">\n  	  <ion-row>\n  	    <ion-col col-12><h2>Holidays</h2></ion-col>\n  	  </ion-row>\n  	</ion-grid>\n\n  	<ion-grid *ngSwitchCase="\'tradefairs\'">\n  	  <ion-row>\n  	    <ion-col col-12><h2>Tradefairs</h2></ion-col>\n  	  </ion-row>\n  	</ion-grid>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/ajantoniof/.bin/goomo/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ion2_calendar__["b" /* CalendarController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ion2_calendar__["b" /* CalendarController */]) === "function" && _d || Object])
], HomePage);

var _a, _b, _c, _d;
//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map