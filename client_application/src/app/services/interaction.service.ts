import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { UserInput } from '../models/user-input';
@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private _roomMessageSource = new Subject<String>();
  private _guestRoomCountMessageSource = new Subject<String>();
  roomMessage$ = this._roomMessageSource.asObservable();
  countMessage$ = this._guestRoomCountMessageSource.asObservable();

  bookButtonClicked = new EventEmitter();
  subsVar: Subscription;

  headerBookButtonClicked = new EventEmitter();
  headerSubsVar: Subscription;

  
  constructor() { }

  sendRoom(room, opt, promo){
    var arg = {
      room : room,
      opt: opt,
      promo: promo
    }
    this._roomMessageSource.next(JSON.stringify(arg));
  }

  sendGuestAndRoomCount(obj: UserInput){
    var arg = {
      checkInDate:obj.checkInDate,
      checkOutDate:obj.checkOutDate,
      guestCount : obj.guestCount,
      roomCount: obj.roomCount,
    }
    this._guestRoomCountMessageSource.next(JSON.stringify(arg));
  }


}
