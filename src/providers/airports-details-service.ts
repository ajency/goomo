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



    private topDestinations = [
    {
                "id": 2997,
                "name": "Chhatrapati Shivaji International Airport",
                "city": "Mumbai",
                "country": "India",
                "iata": "BOM",
                "icao": "VABB",
                "latitude": 19,
                "longitude": 73,
                "altitude": 39,
                "timezone": 6,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },
            {
                "id": 3144,
                "name": "Chennai International Airport",
                "city": "Chennai",
                "country": "India",
                "iata": "MAA",
                "icao": "VOMM",
                "latitude": 13,
                "longitude": 80,
                "altitude": 52,
                "timezone": 6,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },

            {
                "id": 3131,
                "name": "Kempegowda International Airport",
                "city": "Bangalore",
                "country": "India",
                "iata": "BLR",
                "icao": "VOBL",
                "latitude": 13,
                "longitude": 78,
                "altitude": 3000,
                "timezone": 6,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },

            {
                "id": 2188,
                "name": "Dubai International Airport",
                "city": "Dubai",
                "country": "United Arab Emirates",
                "iata": "DXB",
                "icao": "OMDB",
                "latitude": 25,
                "longitude": 55,
                "altitude": 62,
                "timezone": 4,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },

            {
                "id": 507,
                "name": "London Heathrow Airport",
                "city": "London",
                "country": "United Kingdom",
                "iata": "LHR",
                "icao": "EGLL",
                "latitude": 51,
                "longitude": 0,
                "altitude": 83,
                "timezone": 0,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },

            {
                "id": 3316,
                "name": "Singapore Changi Airport",
                "city": "Singapore",
                "country": "Singapore",
                "iata": "SIN",
                "icao": "WSSS",
                "latitude": 1,
                "longitude": 104,
                "altitude": 22,
                "timezone": 8,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },

            {
                "id": 3007,
                "name": "Dabolim Airport",
                "city": "Goa",
                "country": "India",
                "iata": "GOI",
                "icao": "VAGO",
                "latitude": 15,
                "longitude": 74,
                "altitude": 150,
                "timezone": 6,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },

            {
                "id": 3093,
                "name": "Indira Gandhi International Airport",
                "city": "Delhi",
                "country": "India",
                "iata": "DEL",
                "icao": "VIDP",
                "latitude": 29,
                "longitude": 77,
                "altitude": 777,
                "timezone": 6,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },

            {
                "id": 3098,
                "name": "Jaipur International Airport",
                "city": "Jaipur",
                "country": "India",
                "iata": "JAI",
                "icao": "VIJP",
                "latitude": 27,
                "longitude": 76,
                "altitude": 1263,
                "timezone": 6,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },

            {
                "id": 3885,
                "name": "Suvarnabhumi Airport",
                "city": "Bangkok",
                "country": "Thailand",
                "iata": "BKK",
                "icao": "VTBS",
                "latitude": 14,
                "longitude": 101,
                "altitude": 5,
                "timezone": 7,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },

            {
                "id": 3141,
                "name": "Begumpet Airport",
                "city": "Hyderabad",
                "country": "India",
                "iata": "BPM",
                "icao": "VOHY",
                "latitude": 17,
                "longitude": 78,
                "altitude": 1742,
                "timezone": 6,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },

            {
                "id": 3797,
                "name": "John F Kennedy International Airport",
                "city": "New York",
                "country": "United States",
                "iata": "JFK",
                "icao": "KJFK",
                "latitude": 41,
                "longitude": -74,
                "altitude": 13,
                "timezone": -5,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },

            {
                "id": 2994,
                "name": "Sardar Vallabhbhai Patel International Airport",
                "city": "Ahmedabad",
                "country": "India",
                "iata": "AMD",
                "icao": "VAAH",
                "latitude": 23,
                "longitude": 73,
                "altitude": 189,
                "timezone": 6,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },

            {
                "id": 3043,
                "name": "Netaji Subhash Chandra Bose International Airport",
                "city": "Kolkata",
                "country": "India",
                "iata": "CCU",
                "icao": "VECC",
                "latitude": 23,
                "longitude": 88,
                "altitude": 16,
                "timezone": 6,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },

            {
                "id": 3024,
                "name": "Bandaranaike International Colombo Airport",
                "city": "Colombo",
                "country": "Sri Lanka",
                "iata": "CMB",
                "icao": "VCBI",
                "latitude": 7,
                "longitude": 80,
                "altitude": 30,
                "timezone": 6,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },

            {
                "id": 3136,
                "name": "Cochin International Airport",
                "city": "Kochi",
                "country": "India",
                "iata": "COK",
                "icao": "VOCI",
                "latitude": 10,
                "longitude": 76,
                "altitude": 30,
                "timezone": 6,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },

            {
                "id": 3017,
                "name": "Pune Airport",
                "city": "Pune",
                "country": "India",
                "iata": "PNQ",
                "icao": "VAPO",
                "latitude": 19,
                "longitude": 74,
                "altitude": 1942,
                "timezone": 6,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },

            {
                "id": 3081,
                "name": "Sri Guru Ram Dass Jee International Airport",
                "city": "Amritsar",
                "country": "India",
                "iata": "ATQ",
                "icao": "VIAR",
                "latitude": 32,
                "longitude": 75,
                "altitude": 756,
                "timezone": 6,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },

            {
                "id": 3304,
                "name": "Kuala Lumpur International Airport",
                "city": "Kuala Lumpur",
                "country": "Malaysia",
                "iata": "KUL",
                "icao": "WMKK",
                "latitude": 3,
                "longitude": 102,
                "altitude": 69,
                "timezone": 8,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            },

            {
                "id": 3077,
                "name": "Chek Lap Kok International Airport",
                "city": "Hong Kong",
                "country": "Hong Kong",
                "iata": "HKG",
                "icao": "VHHH",
                "latitude": 22,
                "longitude": 114,
                "altitude": 28,
                "timezone": 8,
                "dst": 0,
                "tz_timezone": 0,
                "type": 0,
                "source": "OurAirports"
            }

    ];




    private defaultHeaders = {};

    private filters: Filters<any>;

    constructor(private appservice: AppService) {
        console.log('Hello AirportsDetailsServiceProvider Provider');
        this.filters = {}
        this.filters["limit"] = 10;
        this.filters["page"] = 1;
    }

    // public getTopSources() {
    //     return this.topSources;
    // }

    public getTopDestinations() {
        return this.topDestinations;
    }

    public getAirportDetails(filters: {}, type: string = 'promise'): any{
        this.filters = filters;
        let url = 'https://goomo.ajency.in/api/api/airports';
        return this.appservice.request(url,'get',this.filters, this.defaultHeaders, false, type);
    }
}
