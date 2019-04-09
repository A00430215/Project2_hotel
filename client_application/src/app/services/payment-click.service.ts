import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class PaymentClickService {

  paymentButtonClicked = new EventEmitter();
  subsVar: Subscription;
  isPayNowEnabled: boolean = true;
  travellerInfo: any;
  
  constructor() { 
    }

    onPaynowClick(){
      this.paymentButtonClicked.emit();
  }

  getTravellerInfo(){
    return this.travellerInfo;
  }

  setTravellerInfo(travellerInfo:any){
    this.travellerInfo = travellerInfo;
  }

}
