import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Signup } from '../models/signup';
import { AppConfig } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  public baseURL: any;
  public payLoad: any = {};
  public headers: any;

  constructor(private httpclient: HttpClient, private appConfig: AppConfig) {
    this.baseURL = this.appConfig.getBaseUrl();
    // this.baseURL = this.appConfig.setting['PathAPI'];
    // this.headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    this.headers = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

   }

  register(signupVals: Signup){
    this.createPayload(signupVals);
    console.log(this.payLoad);  
    return this.httpclient.post(this.baseURL + 'customer', this.payLoad, this.headers);
}

createPayload(signupVals){
  this.payLoad.FirstName = signupVals.firstName;
  this.payLoad.LastName = signupVals.lastName;
  this.payLoad.Gender = "Male";
  this.payLoad.DateOfRegistration = new Date();
  this.payLoad.PhoneNumber = signupVals.phone;
  this.payLoad.Email = signupVals.email;
  this.payLoad.Password = signupVals.password;

}
 }
