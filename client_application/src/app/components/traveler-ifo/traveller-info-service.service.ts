import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/app/config/config';
import { TrevellerInfo } from 'src/app/models/treveller-info';

@Injectable({
  providedIn: 'root'
})
export class TravellerInfoServiceService {

  constructor(private httpClient: HttpClient, private appConfig: AppConfig) {
    this.baseURL = this.appConfig.getBaseUrl();
   }

  public baseURL: string;

//   addTravellerInfo(travellerinfo: TrevellerInfo){
//     return this.httpClient.post(this.baseURL + 'traveller', travellerinfo);
// }

}
