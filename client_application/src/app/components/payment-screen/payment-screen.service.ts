  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { AppConfig } from 'src/app/config/config';
import { BookingSummaryService } from 'src/app/services/booking-summary.service';
import { Helpers } from 'src/app/helpers/helpers';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert-service';
  
  @Injectable({
    providedIn: 'root'
  })
  export class PaymentScreenService {
  
    public paymentInfo:any;
    public baseURL:any;
    public token: string;
    public headers: any;

    constructor(private router: Router,private helpers: Helpers, private httpClient: HttpClient, private appConfig: AppConfig, private bookingsummaryService: BookingSummaryService, private alertService: AlertService) { 
  
    // this.baseURL = this.appConfig.setting.pathAPI;
    this.baseURL = this.appConfig.getBaseUrl();

    }
  
  
    // Post Payment data
    post_paymentInfo(payemntinfo: any){

      this.token = this.helpers.getToken();

      if(this.token == undefined){
        this.alertService.error("User is not signed in.");
        this.router.navigate(['/login']);
      }

      console.log(this.token);
      
      this.headers = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': "bearer " +  this.token
        })
      };
      
      return this.httpClient.post(this.baseURL + 'payment', payemntinfo, this.headers);
  }

  // Send all data to booking service--------- change as required
  // sendBookingData(bookinData: any){
  //  return this.bookingsummaryService.createBooking(bookinData);
  // }
  
  
  // Not Part of API call
    getPaymentData(){
      return this.paymentInfo;
    }
  
    setPaymentData(paymentInfo: any){
      this.paymentInfo = paymentInfo;
      
    }
  }
  
