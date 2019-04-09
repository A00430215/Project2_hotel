import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
@Component({
  selector: 'app-review-booking',
  templateUrl: './review-booking.component.html',
  styleUrls: ['./review-booking.component.css']
})
export class ReviewBookingComponent implements OnInit {
  public data:any;
  public showDesk: boolean;
  constructor(private _route:ActivatedRoute, private router:Router) { }
  public innerWidth: any;
  ngOnInit() {
    this.data = this._route.snapshot.params;
    this.innerWidth = window.innerWidth;
    if(innerWidth > 1024 ){
      this.showDesk = true;
    }
  }

}
