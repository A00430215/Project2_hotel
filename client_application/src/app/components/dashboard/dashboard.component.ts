import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public recommendedRoom = {
    
  }
  public showDesk: boolean;

  constructor() { }
  public innerWidth: any;
ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log(innerWidth);
    if(innerWidth > 1024 ){
      this.showDesk = true;
    }
}
}
