import { Component, OnInit } from '@angular/core';
import { InteractionService} from '../../services/interaction.service';
import { AlertService } from 'src/app/services/alert-service';
import { ActivatedRoute, Router, Params} from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css']
})
export class MainWrapperComponent implements OnInit {
  public showWidget:boolean = false;
  public imageUrlArray = [
   "//r1imghtlak.mmtcdn.com/efc9da08bc0811e8abee0281517d0dd4.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;190,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/34b237ce71c711e780a80a4cef95d023.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;176,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/dbbd4f6871c711e7b4900a4cef95d023.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;176,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/3953224a9ca711e4a320daf4768ad8d9.jfif?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;401,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/6c1a5f8271c911e79d84025f77df004f.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;52,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/630a428671c911e7a5d7025f77df004f.jpg?&amp;output-quality=75&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/a0d124ea71c911e79d84025f77df004f.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;176,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/21bc88a471c711e780a80a4cef95d023.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;176,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/478b68f071c911e7a5d7025f77df004f.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;176,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/0ee0d60e71c711e780a80a4cef95d023.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;176,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/745a8e1a71c911e7ae3b025f77df004f.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;52,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/374e42aa71c911e7a5d7025f77df004f.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;176,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/fc48d34271c711e7b4900a4cef95d023.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;176,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/dfbfc58271c711e7b4900a4cef95d023.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;176,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/9f3b466e9ca711e4bc1fdaf4768ad8d9.jfif?&amp;output-quality=75&amp;downsize=720:*&amp;crop=720:550;0,36&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/1d2fb20071c911e7a5d7025f77df004f.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;176,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/2246bfae71c911e7ae3b025f77df004f.jpg?&amp;output-quality=75&amp;downsize=720:*&amp;crop=720:550;0,51&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/c481e59871c711e7b4900a4cef95d023.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;52,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/d7b392369ca611e49c3332e76f7e45c9.jfif?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;52,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/cc7bc1fe9ca611e4a6ab32e76f7e45c9.jfif?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;279,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/41011b1071c911e7a5c1025f77df004f.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;52,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/e4b02898f69211e7a93d025f77df004f.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;176,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/e539e92af69211e7a93d025f77df004f.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;176,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/e5cf008cf69211e7a93d025f77df004f.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;176,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/e66011f8f69211e7a93d025f77df004f.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;35,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/2c2b2910bc0511e8b0580a10ee0daf10.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;189,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/4f91898abc0511e888580adf15cb2602.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;51,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/5813eb02bc0511e8b67c0aceac5c031a.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;62,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/5c4fbc78bc0511e88fb20224510f5e5b.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;48,0&amp;output-format=jpg",
   "//r1imghtlak.mmtcdn.com/6089561ebc0511e8a9700aceac5c031a.jpg?&amp;output-quality=75&amp;downsize=*:550&amp;crop=720:550;52,0&amp;output-format=jpg"
  ]

  constructor(private _interactionService:InteractionService, private _route:ActivatedRoute, private router:Router, private alertService: AlertService,) { 
  
  }
  public room : any;
  public roomOption: any;
  public promo: any;
  public checkInDate: any;
  public checkOutDate: any;
  public guestCount: any;
  public roomCount: any;
  public buttonClicked: boolean = false;
  public today: Date;
  public tomorrow: Date;
  public dateDiff: any;
  public isDateValid: boolean = true;


  ngOnInit() {
    this.today = new Date();
    this.tomorrow = new Date(this.today.setDate(this.today.getDate() + 2));
    this._interactionService.roomMessage$.subscribe(
      (message:string) => {
           var roomWithOpt = JSON.parse(message);
           this.room = roomWithOpt.room;
           this.roomOption = roomWithOpt.opt;
           this.promo = roomWithOpt.promo;
      }
    )
    this._interactionService.countMessage$.subscribe(
      (message:string) => {
        var counts = JSON.parse(message);
        this.checkInDate = counts.checkInDate;
        this.checkOutDate = counts.checkOutDate;
        this.guestCount = counts.guestCount;
        this.roomCount = counts.roomCount;
      }
      
    )
  }

  expandWidget(){
    this.showWidget = !this.showWidget;
    console.log(this.showWidget);
  }

  guestValidations() {
    if (this.guestCount < 1) {
      this.alertService.info("There should be atleast one guest")
      this.guestCount = 1;
    }
  }

  checkDate() {
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var firstDate: Date = this.checkInDate;
    var secondDate: Date = this.checkOutDate;
    var fisrstDate_day = firstDate.getDay();
    this.dateDiff = Math.round((Math.abs((firstDate.getTime() - secondDate.getTime()) + 1) / (oneDay)))
    console.log(fisrstDate_day);
    if (this.dateDiff > 0) {
      this.isDateValid = true;
    } else {
      this.isDateValid = false;
      this.alertService.info("Checkout date should be greater than checkin date");
      this.checkOutDate = null;
    }
  }

  roomsValidations() {
    if (this.roomCount < 1) {
      this.alertService.info("There should be atleast one room for booking");
      this.roomCount = 1;
    }}

  goToReviewBooking(){
    if( !this.checkOutDate ){
      this.alertService.error("Please select checkout date!");
      return;
    }
    else if(!this.guestCount){
      this.alertService.error("Please enter correct guest count!");
      return;
    }
    else if(!this.roomCount){
      this.alertService.error("Please enter correct room count!");
      return;
    }

    var data = {room:JSON.stringify(this.room), roomOption:JSON.stringify(this.roomOption),promo:JSON.stringify(this.promo), checkInDate: this.checkInDate, checkOutDate: this.checkOutDate, guestCount: this.guestCount, roomCount: this.roomCount};
    this.buttonClicked = true;
    console.log(data);
    this.router.navigate(['/review-booking', data]);
  }

}
