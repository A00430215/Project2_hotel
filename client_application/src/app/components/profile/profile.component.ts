import { Component, OnInit } from '@angular/core';
import { Helpers } from 'src/app/helpers/helpers';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private helper: Helpers) { }

  public customerData: any;
  public today = new Date();
  ngOnInit() {
   this.customerData = this.helper.getCustomerData();
   console.log(this.customerData);
  }

}
