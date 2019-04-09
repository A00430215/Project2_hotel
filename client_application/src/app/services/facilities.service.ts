import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  public baseURL: any;

  constructor(private httpclient: HttpClient, private appConfig: AppConfig) { 
    this.baseURL = this.appConfig.getBaseUrl();
  }

  getFacilities(){
    return [
      "Concierge Service",
      "Luggage Storage",
      "Smoking Rooms Available",
      "Multi - Line Phone",
      "Bellboy service",
      "Daily newspaper",
      "Iron and ironing board",
      "Electronic smoke detector",
      "Multi Cuisine Restaurant", 
      "Bathroom",
      "Beach bar",
      "Dine Around option Available",
      "Packaged Water",
      "Cafeteria",
      "Laundry service",
      "Mini Refrigerator",
      "Daily housekeeping and turn-down",
      "Room Service",
      "Wake-up Call"
    ]
  }

//   getFacilities(){
//     return this.httpclient.get(this.baseURL + '/amenities');
// }
}
