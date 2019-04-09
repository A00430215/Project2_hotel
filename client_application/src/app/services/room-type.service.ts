import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {

  public baseURL: string;
  constructor(private httpClient: HttpClient, private appConfig: AppConfig) { 

  //  this.baseURL = this.appConfig.setting.pathAPI;
      this.baseURL = this.appConfig.getBaseUrl();
  }

//   Get RoomTypes                                          // uncomment when api is ready
// getRoomTypes(){
//   return this.httpClient.get(this.baseURL + '/roomTypes');
// }

getRoomTypes(){ 
  return [{
    "roomType":"The Lalit Legacy Suite",
    "options": [
      {
        "name": "OPTION 1",
        "promo": {
          "name": "SMU Student",
          "discount": "₹ 13,968"
        },
        "recommended": 1,
        "breakfast": 1,
        "nonRefundable": 1,
        "included": "Rate includes Buffet Breakfast, one way shared Airport transfer and Wi-Fi. Stay for two nights or above will include both ways shared Airport transfers (24 Hrs Prior Information is required to arrange for transfers) Note : Mandatory New Year's Celebration Dinner on 31st December 2019 INR 13,500 + Taxes per Adult INR 6750 + Taxes per child (directly payable at the hotel and not included in room charges)",
        "discounted_price": "₹ 76,032",
        "real_price": "₹ 90,000",
        "deal": "Deal Applied: HTLEC. You Get Flat INR 3168.0 OFF!"
      },
      { 
        "name": "OPTION 2",
        "promo": {
          "name": "SMU Student",
          "discount": "₹ 3,600"
        },
        "recommended": 0,
        "breakfast": 1,
        "nonRefundable": 1,
        "included": "Rate includes Buffet Breakfast, one way shared Airport transfer and Wi-Fi. Stay for two nights or above will include both ways shared Airport transfers (24 Hrs Prior Information is required to arrange for transfers) Note : Mandatory New Year's Celebration Dinner on 31st December 2019 INR 13,500 + Taxes per Adult INR 6750 + Taxes per child (directly payable at the hotel and not included in room charges)",
        "discounted_price": "₹ 86,400",
        "real_price": "₹ 90,0000",
        "deal": "Deal Applied: HTLEC. You Get Flat INR 3600.0 OFF!"
      }
    ]
  },
  {
    "roomType":"Three bedroom Villa",
    "options": [
      {
        "name": "OPTION 1",
        "promo": {
          "name": "SMU Student",
          "discount": "₹ 19,400"
        },
        "recommended": 0,
        "breakfast": 1,
        "nonRefundable": 1,
        "included": "Rate includes Buffet Breakfast, one way shared Airport transfer and Wi-Fi. Stay for two nights or above will include both ways shared Airport transfers (24 Hrs Prior Information is required to arrange for transfers) Note : Mandatory New Year's Celebration Dinner on 31st December 2019 INR 13,500 + Taxes per Adult INR 6750 + Taxes per child (directly payable at the hotel and not included in room charges)",
        "discounted_price": "₹ 1,05,600",
        "real_price": "₹ 1,25,000",
        "deal": "Deal Applied: HTLEC. You Get Flat INR 4400.0 OFF!"
      },
      {
        "name": "OPTION 2",
        "promo": {
          "name": "SMU Student",
          "discount": "₹ 5,000"
        },
        "recommended": 0,
        "breakfast": 1,
        "nonRefundable": 1,
        "included": "Rate includes Buffet Breakfast, one way shared Airport transfer and Wi-Fi. Stay for two nights or above will include both ways shared Airport transfers (24 Hrs Prior Information is required to arrange for transfers) Note : Mandatory New Year's Celebration Dinner on 31st December 2019 INR 13,500 + Taxes per Adult INR 6750 + Taxes per child (directly payable at the hotel and not included in room charges)",
        "discounted_price": "₹ 1,20,000",
        "real_price": "₹ 1,25,000",
        "deal": "Deal Applied: HTLEC. You Get Flat INR 5000.0 OFF!"
      }
    ]
  },
  {
    "roomType":"Four bedroom Villa",
    "options": [
      {
        "name": "OPTION 1",
        "promo": {
          "name": "SMU Student",
          "discount": "₹ 25,380"
        },
        "recommended": 0,
        "breakfast": 1,
        "nonRefundable": 1,
        "included": "Rate includes Buffet Breakfast, one way shared Airport transfer and Wi-Fi. Stay for two nights or above will include both ways shared Airport transfers (24 Hrs Prior Information is required to arrange for transfers) Note : Mandatory New Year's Celebration Dinner on 31st December 2019 INR 13,500 + Taxes per Adult INR 6750 + Taxes per child (directly payable at the hotel and not included in room charges)",
        "discounted_price": "₹ 1,26,720",
        "real_price": "₹ 1,50,000",
        "deal": "Deal Applied: HTLEC. You Get Flat INR 5280.0 OFF!"
      },
      {
        "name": "OPTION 2",
        "promo": {
          "name": "SMU Student",
          "discount": "₹ 6,000"
        },
        "recommended": 0,
        "breakfast": 1,
        "nonRefundable": 1,
        "included": "Rate includes Buffet Breakfast, one way shared Airport transfer and Wi-Fi. Stay for two nights or above will include both ways shared Airport transfers (24 Hrs Prior Information is required to arrange for transfers) Note : Mandatory New Year's Celebration Dinner on 31st December 2019 INR 13,500 + Taxes per Adult INR 6750 + Taxes per child (directly payable at the hotel and not included in room charges)",
        "discounted_price": "₹ 1,44,000",
        "real_price": "₹ 1,50,000",
        "deal": "Deal Applied: HTLEC. You Get Flat INR 6000.0 OFF!"
      }
    ]
  }]
}

}
