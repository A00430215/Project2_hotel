import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../services/interaction.service';
import { UserInput } from 'src/app/models/user-input';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { AlertService } from 'src/app/services/alert-service';
@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  public checkInDate: Date = new Date();
  public checkOutDate: Date;
  public guestCount: number = 1;
  public roomCount: number = 1;
  public obj: UserInput;
  public isSubmitClicked: boolean = false;
  public today: Date;
  public tomorrow: Date;
  public preDate: Date;
  public dateDiff: any;
  public isDateValid: boolean = true;

  constructor(private _interactionService: InteractionService, private alertService: AlertService) {
   
  }

  ngOnInit() {
    this.today = new Date();
    this.preDate = new Date(this.today.setDate(this.today.getDate() - 1));
    this.tomorrow = new Date(this.today.setDate(this.today.getDate() + 2));
    console.log(this.tomorrow);
    this.obj = {
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
      guestCount: this.guestCount,
      roomCount: this.roomCount
    }
    

    this._interactionService.sendGuestAndRoomCount(this.obj);
  }


  checkDate() {
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var firstDate = this.checkInDate;
    var secondDate = this.checkOutDate;
    var fisrstDate_day = firstDate.getDay();
    this.dateDiff = Math.round((Math.abs((firstDate.getTime() - secondDate.getTime()) + 1) / (oneDay)))
    console.log(fisrstDate_day);
    if (this.dateDiff > 0) {
      this.isDateValid = true;
    } else {
      this.isDateValid = false;
      this.alertService.error("Checkout date should be greater than checkin date");
      this.checkOutDate = null;
    }
    this.emitCounts();
  }

  guestValidations() {
    if (this.guestCount < 1) {
      this.alertService.error("There should be atleast one guest");
      this.guestCount = 1;
    }
    this.emitCounts();
  }

  roomsValidations() {
    if (this.roomCount < 1) {
      this.alertService.error("There should be atleast one room for booking");
      this.roomCount = 1;
    }
    
    this._interactionService.sendGuestAndRoomCount(this.obj);
    this.emitCounts();
  }

  onSubmit() {
    this.obj = {
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
      guestCount: this.guestCount,
      roomCount: this.roomCount
    }

    this.emitCounts();

  }

  emitCounts(){
    this.obj = {
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
      guestCount: this.guestCount,
      roomCount: this.roomCount
    }

    this._interactionService.sendGuestAndRoomCount(this.obj);
  }


}

