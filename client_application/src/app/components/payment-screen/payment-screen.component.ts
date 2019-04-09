import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { PaymentScreenService } from './payment-screen.service';
import { AlertService } from 'src/app/services/alert-service';
@Component({
  selector: 'app-payment-screen',
  templateUrl: './payment-screen.component.html',
  styleUrls: ['./payment-screen.component.css']
})
export class PaymentScreenComponent implements OnInit {

  constructor(private _route:ActivatedRoute, private router:Router, private paymentScreenService: PaymentScreenService, private alertService: AlertService) { }
 
  public paymentData: any = {};

  public payment_info = {
    "card_num" : "",
    "nameOnCard" : "Nishant Malhotra",
    "exp_month" : "",
    "exp_year" : "",
    "cvv" : "123",
    "cardType": "Visa"
  }

  public priceData: any;
  public paymentPayload: any = {};
  public pattern:any;
  public cardErrorCode: string;
  public data: any;
  public totalPrice: number;
  


  public exp_month: string[] = ["01", "02","03","04","05","06","07","08","09","10","11","12"];

  public exp_year: string[] = ["2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030","2031","2032","20303","2034","2035","2036","2037","2038","2039","2040","2041","2042","2043","2044","2045","2046","2047"];
 

  ngOnInit() {
    this.data = this._route.snapshot.params;
    this.pattern= "^4[0-9]{12}(?:[0-9]{3})?$"
    this.cardErrorCode = "Invalid Visa number. Should have 16 digits and start with 4";
    console.log(this.data);
    this.totalPrice = this.data.totalPrice;
      }
  
      setCardType(){

        if(this.payment_info.cardType === "Visa"){
          this.pattern = "^4[0-9]{12}(?:[0-9]{3})?$";
          this.cardErrorCode = "Invalid Visa number. Should have 16 digits and start with 4";
        }

        if(this.payment_info.cardType === "MasterCard"){
          this.pattern = "^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$";
          this.cardErrorCode = "Invalid Master card number. Should have 16 digits and start with 51-55";
        }

        if(this.payment_info.cardType === "American Express"){
          this.pattern = "^3[47][0-9]{13}$";
          this.cardErrorCode = "Invalid American Express card number. Should have 15 digits and start with 34 or 37";
        }
      }

  onSubmit(){
    this.createPayload();
    console.log(this.paymentPayload);

    this.paymentScreenService.post_paymentInfo(this.paymentPayload).subscribe(
      (res)=> this.alertService.info("Payment Successful!"),
      (err) => this.alertService.error(err)
    );

    // this.paymentScreenService.sendBookingData(this.data).subscribe(
    //   (res)=> console.log("Payment Successful!"),
    //   (err) => alert(err)
    // );

  }

  createPayload(){
    this.priceData = this.paymentScreenService.getPaymentData();

    this.paymentPayload.CardNumber = this.payment_info.card_num;
    this.paymentPayload.NameOnCard = this.payment_info.nameOnCard;
    this.paymentPayload.ExpiryMonth = +this.payment_info.exp_month;
    this.paymentPayload.ExpiryYear = +this.payment_info.exp_year;
    this.paymentPayload.CardType = this.payment_info.cardType;   
    this.paymentPayload.PriceBeforeDiscount = this.priceData.realPrice;
    this.paymentPayload.TotalDiscount = this.priceData.totalDiscount;
    this.paymentPayload.PriceAfterDiscount = this.priceData.totalPrice;
    this.paymentPayload.FirstName = this.priceData.travellerInfo.firstName;
    this.paymentPayload.LastName = this.priceData.travellerInfo.lastName;

    return this.paymentPayload;
  }
}
