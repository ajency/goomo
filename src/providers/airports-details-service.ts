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
export class AirportsDetailsServiceProvider {

    private topSources = {
    "airports": [{
        "city_name": "Mumbai",
        "city_legacy_names": ["Bombay"],
        "city_code": "BOM",
        "airport_code": "BOM",
        "airport_name": "Chhatrapati Shivaji Airport",
        "airport_legacy_names": [""],
        "latitude": 19.088056,
        "longitude": 72.851667,
        "popular": true,
        "country_name": "India",
        "country_abbreviation": "IN",
        "world_area_code": "733"
    }, {
        "city_name": "Chennai",
        "city_legacy_names": ["Madras"],
        "city_code": "MAA",
        "airport_code": "MAA",
        "airport_name": "Chennai International Airport",
        "airport_legacy_names": ["madras", "faisee"],
        "latitude": 12.994444,
        "longitude": 80.180556,
        "popular": true,
        "country_name": "India",
        "country_abbreviation": "IN",
        "world_area_code": "733"
    },{
        "city_name": "Bengaluru",
        "city_legacy_names": ["Bangalore"],
        "city_code": "BLR",
        "airport_code": "BLR",
        "airport_name": "Kempegowda International Airport",
        "airport_legacy_names": [""],
        "latitude": 13.198889,
        "longitude": 77.705556,
        "popular": true,
        "country_name": "India",
        "country_abbreviation": "IN",
        "world_area_code": "733"
    },{
        "city_name": "Dubai",
        "city_legacy_names": [],
        "city_code": "DXB",
        "airport_code": "DXB",
        "airport_name": "Dubai International Airport",
        "airport_legacy_names": [""],
        "latitude": 25.250000,
        "longitude": 55.357778,
        "popular": true,
        "country_name": "United Arab Emirates",
        "country_abbreviation": "AE",
        "world_area_code": "678"
    }, {
        "city_name": "Doha",
        "city_legacy_names": [],
        "city_code": "DOH",
        "airport_code": "DOH",
        "airport_name": "Hamad International Airport",
        "airport_legacy_names": [""],
        "latitude": 25.274444,
        "longitude": 51.608333,
        "popular": true,
        "country_name": "Qatar",
        "country_abbreviation": "QA",
        "world_area_code": "664"
    },  {
        "city_name": "London",
        "city_legacy_names": [],
        "city_code": "LON",
        "airport_code": "LHR",
        "airport_name": "Heathrow Airport",
        "airport_legacy_names": [""],
        "latitude": 51.471389,
        "longitude": -0.452778,
        "popular": true,
        "country_name": "United Kingdom of Great Britain and Northern Ireland",
        "country_abbreviation": "GB",
        "world_area_code": "493"
    }, {
        "city_name": "Singapore",
        "city_legacy_names": [],
        "city_code": "SIN",
        "airport_code": "SIN",
        "airport_name": "Changi Airport",
        "airport_legacy_names": [""],
        "latitude": 1.359167,
        "longitude": 103.989444,
        "popular": true,
        "country_name": "Singapore",
        "country_abbreviation": "SG",
        "world_area_code": "776"
    },{
        "city_name": "Goa",
        "city_legacy_names": [],
        "city_code": "GOI",
        "airport_code": "GOI",
        "airport_name": "Dabolim Airport",
        "airport_legacy_names": [""],
        "latitude": 15.380833,
        "longitude": 73.831389,
        "popular": true,
        "country_name": "India",
        "country_abbreviation": "IN",
        "world_area_code": "733"
    },{
        "city_name": "Delhi",
        "city_legacy_names": ["New Delhi"],
        "city_code": "DEL",
        "airport_code": "DEL",
        "airport_name": "Indira Gandhi International Airport",
        "airport_legacy_names": [""],
        "latitude": 28.573611,
        "longitude": 77.100833,
        "popular": true,
        "country_name": "India",
        "country_abbreviation": "IN",
        "world_area_code": "733"
    },{
        "city_name": "Jaipur",
        "city_legacy_names": [],
        "city_code": "JAI",
        "airport_code": "JAI",
        "airport_name": "Jaipur International Airport",
        "airport_legacy_names": [""],
        "latitude": 26.824167,
        "longitude": 75.812222,
        "popular": true,
        "country_name": "India",
        "country_abbreviation": "IN",
        "world_area_code": "733"
    },{
        "city_name": "Bangkok",
        "city_legacy_names": [],
        "city_code": "BKK",
        "airport_code": "BKK",
        "airport_name": "Suvarnabhumi International",
        "airport_legacy_names": [""],
        "latitude": 13.681111,
        "longitude": 100.747222,
        "popular": true,
        "country_name": "Thailand",
        "country_abbreviation": "TH",
        "world_area_code": "782"
    }, {
        "city_name": "Hyderabad",
        "city_legacy_names": [],
        "city_code": "HYD",
        "airport_code": "HYD",
        "airport_name": "Rajiv Gandhi International Airport",
        "airport_legacy_names": [""],
        "latitude": 17.260278,
        "longitude": 78.396944,
        "popular": true,
        "country_name": "India",
        "country_abbreviation": "IN",
        "world_area_code": "733"
    },  {
        "city_name": "New York",
        "city_legacy_names": [],
        "city_code": "NYC",
        "airport_code": "JFK",
        "airport_name": "John F. Kennedy International Airport",
        "airport_legacy_names": [""],
        "latitude": 40.638611,
        "longitude": -73.776944,
        "popular": true,
        "country_name": "United States of America",
        "country_abbreviation": "US",
        "world_area_code": "67"
    },{
        "city_name": "Ahmedabad",
        "city_legacy_names": [],
        "city_code": "AMD",
        "airport_code": "AMD",
        "airport_name": "S. VallabhBhai Patel Airport",
        "airport_legacy_names": [""],
        "latitude": 23.066389,
        "longitude": 72.624167,
        "popular": true,
        "country_name": "India",
        "country_abbreviation": "IN",
        "world_area_code": "733"
    }, {
        "city_name": "Kolkata",
        "city_legacy_names": ["Calcutta"],
        "city_code": "CCU",
        "airport_code": "CCU",
        "airport_name": "Subhas Chandra Bose Airport",
        "airport_legacy_names": [""],
        "latitude": 22.652500,
        "longitude": 88.449167,
        "popular": true,
        "country_name": "India",
        "country_abbreviation": "IN",
        "world_area_code": "733"
    }, {
        "city_name": "Colombo",
        "city_legacy_names": [],
        "city_code": "CMB",
        "airport_code": "CMB",
        "airport_name": "Bandaranaike International Airport",
        "airport_legacy_names": [""],
        "latitude": 7.175000,
        "longitude": 79.884722,
        "popular": true,
        "country_name": "Sri Lanka",
        "country_abbreviation": "LK",
        "world_area_code": "711"
    },  {
        "city_name": "Kochi",
        "city_legacy_names": ["Cochin"],
        "city_code": "COK",
        "airport_code": "COK",
        "airport_name": "Kochi International Airport",
        "airport_legacy_names": [""],
        "latitude": 10.155556,
        "longitude": 76.390278,
        "popular": true,
        "country_name": "India",
        "country_abbreviation": "IN",
        "world_area_code": "733"
    }, {
        "city_name": "Pune",
        "city_legacy_names": ["Poona"],
        "city_code": "PNQ",
        "airport_code": "PNQ",
        "airport_name": "Lohegaon Airport",
        "airport_legacy_names": [""],
        "latitude": 18.581389,
        "longitude": 73.920556,
        "popular": true,
        "country_name": "India",
        "country_abbreviation": "IN",
        "world_area_code": "733"
    }, {
        "city_name": "Amritsar",
        "city_legacy_names": [],
        "city_code": "ATQ",
        "airport_code": "ATQ",
        "airport_name": "Sri Guru Ram Dass Jee Airport",
        "airport_legacy_names": [""],
        "latitude": 31.709722,
        "longitude": 74.797222,
        "popular": true,
        "country_name": "India",
        "country_abbreviation": "IN",
        "world_area_code": "733"
    },{
        "city_name": "Kuala Lumpur",
        "city_legacy_names": [],
        "city_code": "KUL",
        "airport_code": "KUL",
        "airport_name": "Kuala Lumpur International Airport",
        "airport_legacy_names": [""],
        "latitude": 2.745556,
        "longitude": 101.710000,
        "popular": true,
        "country_name": "Malaysia",
        "country_abbreviation": "MY",
        "world_area_code": "749"
    },{
        "city_name": "Hong Kong",
        "city_legacy_names": [],
        "city_code": "HKG",
        "airport_code": "HKG",
        "airport_name": "Hong Kong International Airport",
        "airport_legacy_names": [""],
        "latitude": 22.308889,
        "longitude": 113.914722,
        "popular": true,
        "country_name": "Hong Kong",
        "country_abbreviation": "HK",
        "world_area_code": "729"
    }
        ]
};

    private topDestinations = {
        "airports": [{
            "city_name": "Mumbai",
            "city_legacy_names": ["Bombay"],
            "city_code": "BOM",
            "airport_code": "BOM",
            "airport_name": "Chhatrapati Shivaji Airport",
            "airport_legacy_names": [""],
            "latitude": 19.088056,
            "longitude": 72.851667,
            "popular": true,
            "country_name": "India",
            "country_abbreviation": "IN",
            "world_area_code": "733"
        }, {
            "city_name": "Chennai",
            "city_legacy_names": ["Madras"],
            "city_code": "MAA",
            "airport_code": "MAA",
            "airport_name": "Chennai International Airport",
            "airport_legacy_names": ["madras", "faisee"],
            "latitude": 12.994444,
            "longitude": 80.180556,
            "popular": true,
            "country_name": "India",
            "country_abbreviation": "IN",
            "world_area_code": "733"
        },{
            "city_name": "Bengaluru",
            "city_legacy_names": ["Bangalore"],
            "city_code": "BLR",
            "airport_code": "BLR",
            "airport_name": "Kempegowda International Airport",
            "airport_legacy_names": [""],
            "latitude": 13.198889,
            "longitude": 77.705556,
            "popular": true,
            "country_name": "India",
            "country_abbreviation": "IN",
            "world_area_code": "733"
        },{
            "city_name": "Dubai",
            "city_legacy_names": [],
            "city_code": "DXB",
            "airport_code": "DXB",
            "airport_name": "Dubai International Airport",
            "airport_legacy_names": [""],
            "latitude": 25.250000,
            "longitude": 55.357778,
            "popular": true,
            "country_name": "United Arab Emirates",
            "country_abbreviation": "AE",
            "world_area_code": "678"
        }, {
            "city_name": "Doha",
            "city_legacy_names": [],
            "city_code": "DOH",
            "airport_code": "DOH",
            "airport_name": "Hamad International Airport",
            "airport_legacy_names": [""],
            "latitude": 25.274444,
            "longitude": 51.608333,
            "popular": true,
            "country_name": "Qatar",
            "country_abbreviation": "QA",
            "world_area_code": "664"
        },  {
            "city_name": "London",
            "city_legacy_names": [],
            "city_code": "LON",
            "airport_code": "LHR",
            "airport_name": "Heathrow Airport",
            "airport_legacy_names": [""],
            "latitude": 51.471389,
            "longitude": -0.452778,
            "popular": true,
            "country_name": "United Kingdom of Great Britain and Northern Ireland",
            "country_abbreviation": "GB",
            "world_area_code": "493"
        }, {
            "city_name": "Singapore",
            "city_legacy_names": [],
            "city_code": "SIN",
            "airport_code": "SIN",
            "airport_name": "Changi Airport",
            "airport_legacy_names": [""],
            "latitude": 1.359167,
            "longitude": 103.989444,
            "popular": true,
            "country_name": "Singapore",
            "country_abbreviation": "SG",
            "world_area_code": "776"
        },{
            "city_name": "Goa",
            "city_legacy_names": [],
            "city_code": "GOI",
            "airport_code": "GOI",
            "airport_name": "Dabolim Airport",
            "airport_legacy_names": [""],
            "latitude": 15.380833,
            "longitude": 73.831389,
            "popular": true,
            "country_name": "India",
            "country_abbreviation": "IN",
            "world_area_code": "733"
        },{
            "city_name": "Delhi",
            "city_legacy_names": ["New Delhi"],
            "city_code": "DEL",
            "airport_code": "DEL",
            "airport_name": "Indira Gandhi International Airport",
            "airport_legacy_names": [""],
            "latitude": 28.573611,
            "longitude": 77.100833,
            "popular": true,
            "country_name": "India",
            "country_abbreviation": "IN",
            "world_area_code": "733"
        },{
            "city_name": "Jaipur",
            "city_legacy_names": [],
            "city_code": "JAI",
            "airport_code": "JAI",
            "airport_name": "Jaipur International Airport",
            "airport_legacy_names": [""],
            "latitude": 26.824167,
            "longitude": 75.812222,
            "popular": true,
            "country_name": "India",
            "country_abbreviation": "IN",
            "world_area_code": "733"
        },{
            "city_name": "Bangkok",
            "city_legacy_names": [],
            "city_code": "BKK",
            "airport_code": "BKK",
            "airport_name": "Suvarnabhumi International",
            "airport_legacy_names": [""],
            "latitude": 13.681111,
            "longitude": 100.747222,
            "popular": true,
            "country_name": "Thailand",
            "country_abbreviation": "TH",
            "world_area_code": "782"
        }, {
            "city_name": "Hyderabad",
            "city_legacy_names": [],
            "city_code": "HYD",
            "airport_code": "HYD",
            "airport_name": "Rajiv Gandhi International Airport",
            "airport_legacy_names": [""],
            "latitude": 17.260278,
            "longitude": 78.396944,
            "popular": true,
            "country_name": "India",
            "country_abbreviation": "IN",
            "world_area_code": "733"
        },  {
            "city_name": "New York",
            "city_legacy_names": [],
            "city_code": "NYC",
            "airport_code": "JFK",
            "airport_name": "John F. Kennedy International Airport",
            "airport_legacy_names": [""],
            "latitude": 40.638611,
            "longitude": -73.776944,
            "popular": true,
            "country_name": "United States of America",
            "country_abbreviation": "US",
            "world_area_code": "67"
        },{
            "city_name": "Ahmedabad",
            "city_legacy_names": [],
            "city_code": "AMD",
            "airport_code": "AMD",
            "airport_name": "S. VallabhBhai Patel Airport",
            "airport_legacy_names": [""],
            "latitude": 23.066389,
            "longitude": 72.624167,
            "popular": true,
            "country_name": "India",
            "country_abbreviation": "IN",
            "world_area_code": "733"
        }, {
            "city_name": "Kolkata",
            "city_legacy_names": ["Calcutta"],
            "city_code": "CCU",
            "airport_code": "CCU",
            "airport_name": "Subhas Chandra Bose Airport",
            "airport_legacy_names": [""],
            "latitude": 22.652500,
            "longitude": 88.449167,
            "popular": true,
            "country_name": "India",
            "country_abbreviation": "IN",
            "world_area_code": "733"
        }, {
            "city_name": "Colombo",
            "city_legacy_names": [],
            "city_code": "CMB",
            "airport_code": "CMB",
            "airport_name": "Bandaranaike International Airport",
            "airport_legacy_names": [""],
            "latitude": 7.175000,
            "longitude": 79.884722,
            "popular": true,
            "country_name": "Sri Lanka",
            "country_abbreviation": "LK",
            "world_area_code": "711"
        },  {
            "city_name": "Kochi",
            "city_legacy_names": ["Cochin"],
            "city_code": "COK",
            "airport_code": "COK",
            "airport_name": "Kochi International Airport",
            "airport_legacy_names": [""],
            "latitude": 10.155556,
            "longitude": 76.390278,
            "popular": true,
            "country_name": "India",
            "country_abbreviation": "IN",
            "world_area_code": "733"
        }, {
            "city_name": "Pune",
            "city_legacy_names": ["Poona"],
            "city_code": "PNQ",
            "airport_code": "PNQ",
            "airport_name": "Lohegaon Airport",
            "airport_legacy_names": [""],
            "latitude": 18.581389,
            "longitude": 73.920556,
            "popular": true,
            "country_name": "India",
            "country_abbreviation": "IN",
            "world_area_code": "733"
        }, {
            "city_name": "Amritsar",
            "city_legacy_names": [],
            "city_code": "ATQ",
            "airport_code": "ATQ",
            "airport_name": "Sri Guru Ram Dass Jee Airport",
            "airport_legacy_names": [""],
            "latitude": 31.709722,
            "longitude": 74.797222,
            "popular": true,
            "country_name": "India",
            "country_abbreviation": "IN",
            "world_area_code": "733"
        },{
            "city_name": "Kuala Lumpur",
            "city_legacy_names": [],
            "city_code": "KUL",
            "airport_code": "KUL",
            "airport_name": "Kuala Lumpur International Airport",
            "airport_legacy_names": [""],
            "latitude": 2.745556,
            "longitude": 101.710000,
            "popular": true,
            "country_name": "Malaysia",
            "country_abbreviation": "MY",
            "world_area_code": "749"
        },{
            "city_name": "Hong Kong",
            "city_legacy_names": [],
            "city_code": "HKG",
            "airport_code": "HKG",
            "airport_name": "Hong Kong International Airport",
            "airport_legacy_names": [""],
            "latitude": 22.308889,
            "longitude": 113.914722,
            "popular": true,
            "country_name": "Hong Kong",
            "country_abbreviation": "HK",
            "world_area_code": "729"
        }
        ]
    };

    private defaultHeaders = {};

    private filters: Filters<any>;

    constructor(private appservice: AppService) {
        console.log('Hello AirportsDetailsServiceProvider Provider');
        this.filters = {}
        this.filters["limit"] = 10;
        this.filters["page"] = 1;
    }

    public getTopSources() {
        return this.topSources;
    }

    public getTopDestinations() {
        return this.topDestinations;
    }

    public getAirportDetails(filters: {}, type: string = 'promise'): any{
        this.filters = filters;
        console.log(this.filters);
        let url = 'https://goomo.ajency.in/api/api/airports';
        return this.appservice.request(url,'get',this.filters, this.defaultHeaders, false, type);
    }
}
