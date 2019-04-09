import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../config/config';
import { TokenService } from './token.service';
import { Helpers } from '../helpers/helpers';
import { Router } from '@angular/router';
import { BookingSummaryService } from './booking-summary.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public baseURL: string;
  public authValues: any = {};
  public headers: any;
  public userData: any;
  public token: any;


  constructor(private helpers: Helpers,private router: Router, 
              private http: HttpClient, private appConfig: AppConfig, 
              private tokenService: TokenService)
               { 
              this.baseURL = this.appConfig.getBaseUrl();
              this.headers = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                  'Authorization': 'my-auth-token'
                })
              };
               }

  // pathAPI = this.appConfig.setting;

  login(loginData: any) {

    this.authValues.Email = loginData.email;
    this.authValues.Password = loginData.password;

    return this.http.post(this.baseURL + 'login', this.authValues, this.headers);    
  }

  setUserData(userData: any){
    this.userData = userData;
  }

  getUserData(){
    return this.userData;
  }

  setToken(token: any){
    this.token = token;
  }

  getToken(){
    return this.token;
  }
  // {firstName:"", lastName:"", email:"", phone:"", password:""}

// {"FirstName":"Arpit",
// "LastName":"Parashar",
// "Gender":"Male",
// "DateOfRegistration":"04-04-2019",
// "PhoneNumber":"9029895340",
// "Email":"kshparashar@gmail.com",
// "Password":"123456"}
  
}
