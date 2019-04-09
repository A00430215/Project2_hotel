import { Component, OnInit, Input } from '@angular/core';
import { InteractionService } from '../../services/interaction.service';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { PaymentScreenService } from '../payment-screen/payment-screen.service';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.css']
})
export class BookingSummaryComponent implements OnInit {

  constructor(private _interactionService:InteractionService, private _route:ActivatedRoute, private router:Router,
              private paymentScreenService: PaymentScreenService) { }
  @Input("dataInput") data :any;
  @Input() formInput: any;
  public room : any;
  public roomOption: any;
  public promo: any;
  public promoDiscount: any;
  public checkInDate: Date;
  public checkOutDate: Date;
  public guestCount: number;
  public roomCount: number;
  public diffDays:number;
  public totalPrice: number;
  public totalDiscount: number;
  public realPriceDaily: any;
  public realPrice: any;
  public travellerInfo: any;
  public paymentData: any = {};

  ngOnInit() {

    this.room = JSON.parse(this.data.room);
        this.roomOption = JSON.parse(this.data.roomOption);
        this.promo = JSON.parse(this.data.promo);
        this.travellerInfo = JSON.parse(this.data.travelInfo);
        this.promoDiscount = parseInt(this.promo.discount.substring(2).replace(',',""));
        this.checkInDate = this.data.checkInDate;
        this.checkOutDate = this.data.checkOutDate;
        this.guestCount = this.data.guestCount;
        this.roomCount = this.data.roomCount;
        this.totalPrice = parseInt(this.data.totalPrice);
        this.diffDays = parseInt(this.data.diffDays);
        this.totalDiscount = this.promoDiscount * this.diffDays;
        this.realPriceDaily = parseInt(this.roomOption.real_price.substring(2).replace(',',""));
        this.realPrice = this.realPriceDaily * this.diffDays;
        this.paymentData.travellerInfo=this.travellerInfo;
        this.paymentData.realPrice = this.realPrice;
        this.paymentData.totalDiscount = this.totalDiscount;
        this.paymentData.totalPrice = this.totalPrice;
        this.paymentScreenService.setPaymentData(this.paymentData);

  }

}
