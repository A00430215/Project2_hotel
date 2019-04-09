import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { TokenService } from '../../services/token.service';

import { Helpers } from '../../helpers/helpers';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';
import { HttpResponse } from '@angular/common/http';
import { BookingSummaryService } from 'src/app/services/booking-summary.service';
import { HeadServiceService } from 'src/app/services/head-service.service';
import { AlertService } from 'src/app/services/alert-service';

@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: [ './login.component.css' ]

})

export class LoginComponent implements OnInit {

  public token:any;
  
  constructor(private helpers: Helpers, private headServiceService: HeadServiceService, private alertService: AlertService,
    private bookingServive: BookingSummaryService, private router: Router, private tokenService: TokenService, private loginService:LoginService) { }
  
 public loginData: Login = {email: "", password: ""};

  ngOnInit() {
  
  }

  onSubmit() { 
    this.loginService.login(this.loginData).subscribe(
      (res: any) => {
        this.helpers.setCustomerData(res);
        this.helpers.setToken(res.TokenString);
        this.loginService.setToken(res.TokenString);
        console.log(res);
        this.bookingServive.setCustId(res.CustomerId);
        if(res){
          this.headServiceService.setName(res.CustomerName);
          this.router.navigate(['/dashboard']);
        }
      },
      (err: any) => {
        console.log(err);
        if(err.status == 401){
          this.alertService.error("Invalid credentials. Please try again")
          
        } else {
          this.alertService.error("Invalid credentials. Please try again")
        }
      }
    );
  }

  onClickSignUp(){
    this.router.navigate(['/signup']);
  }

} 