import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../config/config';
import { LoginService } from './login.service';
import { Helpers } from '../helpers/helpers';
import { Router } from '@angular/router';
import { AlertService } from './alert-service';

@Injectable({
  providedIn: 'root'
})
export class BookingSummaryService {

  public bookingData: any= {};
  public custData: any = {};
  public baseURL: string;
  public headers: any;
  public travellerHeader: any;
  public token: string;
  public custId: any = 0;
  public travellerData: any = {};
  constructor(private httpClient: HttpClient, private router: Router, private appConfig: AppConfig, private loginService: LoginService, private helpers: Helpers, private alertService: AlertService) { 
  
  //  this.baseURL = this.appConfig.setting.pathAPI;
      this.baseURL = this.appConfig.getBaseUrl();
  }

  // Post Booking data
    postTravellerInfo(booking: any){
      
      this.token = this.helpers.getToken();
  
      this.travellerHeader = {
         headers: new HttpHeaders({
        'Content-Type':  'application/json'})
      };
     
      this.headers = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': "bearer " +  this.token
        })
      };
    this.createBookingPayload(booking);
    console.log(this.travellerData);
    
    return this.httpClient.post(this.baseURL + 'traveller', this.travellerData, this.travellerHeader);
    //return this.httpClient.post(this.baseURL + 'booking', this.bookingData, this.headers);
}

postBookinData(booking: any, guestId: any){
  this.bookingData.Guest_ID = guestId;
  return this.httpClient.post(this.baseURL + 'booking', this.bookingData, this.headers);

}

createBookingPayload(booking: any){
  if(!this.helpers.getToken()){
    this.alertService.info("You have to login in order to make booking");
    this.router.navigate(['/login']);
  }
  let travelInfo = JSON.parse(booking.travelInfo);
  let room = JSON.parse(booking.room);
  let roomOption = JSON.parse(booking.roomOption);
  this.bookingData.Customer_ID = this.custId;
  this.bookingData.Room_Type = 1;
  this.bookingData.Price = parseInt(roomOption.real_price.substring(2).replace(',',""));
  this.bookingData.Check_In_Date = booking.checkInDate.toString();
  this.bookingData.Check_Out_Date = booking.checkOutDate.toString();

  this.custData.FirstName = travelInfo.firstName;
  this.custData.LastName = travelInfo.lastName;
  this.custData.PhoneNumber = travelInfo.phone;
  this.custData.Email = travelInfo.email;
  //this.bookingData.Guest = this.custData;

  this.travellerData = this.custData;
  let num_of_person: number = booking.guestCount
  this.bookingData.No_Of_Persons = +num_of_person;
  let roomCount: number = booking.roomCount;
  this.bookingData.No_Of_Rooms = +roomCount;
  this.bookingData.PromoID = 1;
  this.bookingData.Total_Price = booking.totalPrice;
  this.bookingData.Refundable = roomOption.nonRefundable;
  this.bookingData.BookingDate = booking.checkInDate.toString();
  console.log("--------------------");
  console.log(this.token);
  console.log(this.bookingData);
  return this.bookingData;
}


setCustId(custId: any) {
  this.custId = custId;
}

// Get All Bookings
// getAllBookings(){
//   return this.httpClient.get(this.baseURL);
// }

}
