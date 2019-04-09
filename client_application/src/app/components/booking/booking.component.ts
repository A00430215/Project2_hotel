import { Component, OnInit, Input } from '@angular/core';
import { InteractionService } from '../../services/interaction.service';
import { ActivatedRoute, Router, Params} from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  @Input() data :any;
  constructor(private _interactionService:InteractionService, private _route:ActivatedRoute, private router:Router) { }
  public room : any;
  public roomOption: any;
  public promo: any;
  public checkInDate: Date;
  public checkOutDate: Date;
  public guestCount: number;
  public roomCount: number;

  ngOnInit() {
        this.room = JSON.parse(this.data.room);
        this.roomOption = JSON.parse(this.data.roomOption);
        this.promo = JSON.parse(this.data.promo);
        this.checkInDate = this.data.checkInDate;
        this.checkOutDate = this.data.checkOutDate;
        this.guestCount = this.data.guestCount;
        this.roomCount = this.data.roomCount;
    
      }
    
  }

