import { Component, OnInit, Input } from '@angular/core';
import { PaymentClickService } from 'src/app/services/payment-click.service';
import { InteractionService } from '../../services/interaction.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BookingSummaryService } from 'src/app/services/booking-summary.service';
import { TravellerInfoServiceService } from '../traveler-ifo/traveller-info-service.service';
import { AlertService } from 'src/app/services/alert-service';
import { Helpers } from 'src/app/helpers/helpers';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() data: any;
  constructor(private paymentClickService: PaymentClickService, private _interactionService: InteractionService, private _route: ActivatedRoute, private router: Router, private bookinSummaryService: BookingSummaryService, private alertService: AlertService, private helpers: Helpers) { }
  public room: any;
  public roomOption: any;
  public promo: any;
  public checkInDate: Date;
  public checkOutDate: Date;
  public guestCount: any;
  public roomCount: any;
  public diffDays: any;
  public totalPrice: any;
  public travelInfo: any;
  public promoDiscount: any;
  public totalDiscount: any;
  public realPriceDaily: any;
  public realPrice: any;
  public bookingId: any;


  public name: string = "nishant";
  isPayNowEnabled: boolean = true;
  ngOnInit() {
    console.log(JSON.parse(this.data.roomOption));
    this.room = JSON.parse(this.data.room);
    this.roomOption = JSON.parse(this.data.roomOption);
    this.promo = JSON.parse(this.data.promo);
    this.checkInDate = this.data.checkInDate;
    this.checkOutDate = this.data.checkOutDate;
    this.guestCount = this.data.guestCount;
    this.roomCount = this.data.roomCount;
    this.calculateDays();
  }
  ngAfterViewInit() { }

  onPayNowClick() {
    this.paymentClickService.onPaynowClick();
    this.travelInfo = this.paymentClickService.getTravellerInfo();
    var data = { room: JSON.stringify(this.room), roomOption: JSON.stringify(this.roomOption), promo: JSON.stringify(this.promo), checkInDate: this.checkInDate, checkOutDate: this.checkOutDate, guestCount: this.guestCount, roomCount: this.roomCount, diffDays: this.diffDays, totalPrice: this.totalPrice, travelInfo: JSON.stringify(this.travelInfo) };

    this.bookinSummaryService.postTravellerInfo(data)
      .subscribe(
        (res) => {
          console.log("traveller posted");
          var customer = this.helpers.getCustomerData();
          if(!customer){
            this.router.navigate(['/login']);
            return;
          }
          this.bookingId = res;
          this.bookinSummaryService.postBookinData(data, this.bookingId).subscribe(
            (res: any) => {
              console.log("booking posted");
              console.log(res);
            },
            (err: any) => {
              this.alertService.error("Something went wrong while creating booking" + err);
              console.log(err);
            }
          );
          this.router.navigate(['/pay', data]);
        },
        (err) => {
          this.alertService.error("something went wrong. Please try again " + err)
                console.log(err);
      }

      );

  }

  calculateDays() {
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(this.checkOutDate);
    var secondDate = new Date(this.checkInDate);
    this.diffDays = Math.round((Math.abs((firstDate.getTime() - secondDate.getTime()) + 1) / (oneDay)));
    this.totalPrice = parseInt(this.roomOption.discounted_price.substring(2).replace(',', "")) * this.diffDays;
    this.promoDiscount = parseInt(this.promo.discount.substring(2).replace(',', ""));
    this.totalDiscount = this.promoDiscount * this.diffDays;
    this.realPriceDaily = parseInt(this.roomOption.real_price.substring(2).replace(',', ""));
    this.realPrice = this.realPriceDaily * this.diffDays;
  }

}
