import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AppService} from "../app-service";

/*
 Generated class for the SkuDetailsServiceProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular DI.
 */

interface Filters<FV> {
    [id: string]: FV;
}

@Injectable()
export class AirportsDetailsServiceProvider {

    private topSources = '';

    private topDestinations = '';

    private defaultHeaders = {};

    private filters: Filters<any>;

    constructor(private appservice: AppService) {
        console.log('Hello SkuDetailsServiceProvider Provider');
        this.filters = {}
        this.filters["limit"] = 10;
        this.filters["page"] = 1;
        this.filters["search"] = '';
    }

    getTopSources() {
        return this.topSources;
    }

    getTopDestinations() {
        return this.topDestinations;
    }

    public getAirportDetails(filters: {}, type: string = 'promise'): any{
        this.filters = filters;
        console.log(this.filters);
        let url = 'http://btapp2.ajency.in/skus/getSkuDetails';
        return this.appservice.request(url,'get',this.filters, this.defaultHeaders, false, type);
    }
}
