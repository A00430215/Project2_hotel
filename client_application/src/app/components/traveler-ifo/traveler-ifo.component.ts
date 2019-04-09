import { Component, OnInit } from '@angular/core';
import { PaymentClickService } from 'src/app/services/payment-click.service';
import { TravellerInfoServiceService } from './traveller-info-service.service';
import { TrevellerInfo } from 'src/app/models/treveller-info';

@Component({
  selector: 'app-traveler-ifo',
  templateUrl: './traveler-ifo.component.html',
  styleUrls: ['./traveler-ifo.component.css']
})
export class TravelerIfoComponent implements OnInit {

  constructor(private paymentClickService: PaymentClickService,
              private travellerInfoServiceService: TravellerInfoServiceService
              ) {
   
    if(this.paymentClickService.subsVar){
      this.paymentClickService.subsVar.unsubscribe();
    }
      this.paymentClickService.subsVar = this.paymentClickService.paymentButtonClicked.subscribe((name:string) => {    
        this.clickSubmit();    
      });    
       
   }

  ngOnInit() {    
       
  }
  public valid: any;
  
  public travellerinfo: TrevellerInfo = {
    "id": 1,
    "firstName" : "Nishant",
    "lastName" : "Malhotra",
    "email" : "nishant.malhotra07@gmail.com",
    "phone" : "1111111111",
    "country_code" :"+91",
    "prefix" : "Mr"
  }

  public country_code =  [
    {"num" : "+1" , "name" : "Canada"},
    {"num" : "+91" , "name" : "India"},
    {"num" : "+93" , "name" : "Afghanistan"},
    {"num" : "+94" , "name" : "Albania"},
    {"num" : "+95" , "name" : "Algeria"},
    {"num" : "+9" , "name" : "Andorra"},
    {"num" : "+97" , "name" : "Andorra1"},
    {"num" : "+98" , "name" : "Angola"},
    {"num" : "+99" , "name" : "Argentina"},
    {"num" : "+92" , "name" : "Armenia"},
    {"num" : "+100" , "name" : "Libya"}
    
    ];


  onSubmit(){
    // this.clickSubmit();
    this.paymentClickService.setTravellerInfo(this.travellerinfo);
    // this.travellerInfoServiceService.addTravellerInfo(this.travellerinfo)
    // .subscribe(
    //   (res)=> console.log(res),
    //   (err) => alert("something went wrong. Please try again " + err)
      
    //   );    
  }

  clickSubmit() {
    let element: HTMLElement = document.querySelector('button[type="submit"]') as HTMLElement;
    element.click();
}

}
