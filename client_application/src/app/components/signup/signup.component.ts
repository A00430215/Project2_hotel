import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/models/signup';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupVals: Signup = {firstName:"", lastName:"", email:"", phone:"", password:""};
  constructor(private signupService: SignupService, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
    
  }
  
  submitted = false;

  onSubmit() { 
    this.signupService.register(this.signupVals).subscribe(
      (res) => {
        this.alertService.info("Account Created")
        this.router.navigate(['/login']);
      },
        

      (err) => this.alertService.error("Something went wrong" + err)
    );
   }
}
