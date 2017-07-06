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
        this.filters = filters;
        console.log(this.filters);
        let url = 'https://client-api.goomo.com/v1/flights/period_prices';
        return this.appservice.request(url,'get',this.filters, this.defaultHeaders, false, type);
    }
}
