import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AppService} from "./app-service";

/*
 Generated class for the SkuDetailsServiceProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */

interface Filters<FV> {
    [id: string]: FV;
}

@Injectable()
export class PeriodPricesServiceProvider {

    private defaultHeaders = {};

    private dummyData = {"period_prices":[{"date":"2017-07-01","price":null},{"date":"2017-07-02","price":null},{"date":"2017-07-03","price":null},{"date":"2017-07-04","price":null},{"date":"2017-07-05","price":null},{"date":"2017-07-06","price":777000},{"date":"2017-07-07","price":826000},{"date":"2017-07-08","price":729000},{"date":"2017-07-09","price":null},{"date":"2017-07-10","price":null},{"date":"2017-07-11","price":638000},{"date":"2017-07-12","price":null},{"date":"2017-07-13","price":null},{"date":"2017-07-14","price":842000},{"date":"2017-07-15","price":null},{"date":"2017-07-16","price":670000},{"date":"2017-07-17","price":617000},{"date":"2017-07-18","price":null},{"date":"2017-07-19","price":657000},{"date":"2017-07-20","price":null},{"date":"2017-07-21","price":null},{"date":"2017-07-22","price":null},{"date":"2017-07-23","price":663000},{"date":"2017-07-24","price":null},{"date":"2017-07-25","price":null},{"date":"2017-07-26","price":null},{"date":"2017-07-27","price":null},{"date":"2017-07-28","price":591000},{"date":"2017-07-29","price":null},{"date":"2017-07-30","price":null},{"date":"2017-07-31","price":null}],"meta":{"currency":"INR","mid_threshold":657000,"high_threshold":777000}};

    private filters: Filters<any>;

    constructor(private appservice: AppService) {
        console.log('Hello PeriodPricesServiceProvider Provider');
        this.filters = {}
/*        this.filters["start_date"] = 1; //today
        this.filters["end_date"] = 1; //end of the moneth
        this.filters["origin"]['airport'] = 'GOI'; //end of the moneth
        this.filters["destination"]['airport'] = 'BOM'; //end of the moneth
        this.filters["type"]['airport'] = 'roundtrip'; //end of the moneth*/
    }

    public getPeriodPrices(filters: {}, type: string = 'promise'): any{
/*
        this.filters = filters;
        console.log(this.filters);
        let url = 'https://client-api.goomo.com/v1/flights/period_prices';
        return this.appservice.request(url,'get',this.filters, this.defaultHeaders, false, type);
*/
        return this.dummyData;
    }
}
