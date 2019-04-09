import { Component, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
// import { Helpers } from './helpers/helpers';
import { startWith, delay } from 'rxjs/operators';
import { Helpers } from './helpers/helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  subscription: Subscription;

  authentication: boolean;
  public customer:any  = {};


  constructor(private helpers: Helpers) {

  }

  ngAfterViewInit() {

    this.subscription = this.helpers.isAuthenticationChanged().pipe(

      startWith(this.helpers.isAuthenticated()),

      delay(0)).subscribe((value) =>{

        this.authentication = value;
        this.customer = this.helpers.getCustomerData();
        console.log(this.customer);
        
      }
      );

  }

  title = 'Angular 5 Seed';

  ngOnDestroy() {

    this.subscription.unsubscribe();

  }

}
