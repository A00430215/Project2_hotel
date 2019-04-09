import { Component, OnInit } from '@angular/core';
import { InteractionService} from '../../services/interaction.service';
import { RoomTypeService } from 'src/app/services/room-type.service';
@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.css']
})
export class RoomTypeComponent implements OnInit {

public rooms: any;

constructor(private _interactionService:InteractionService, private roomTypeService: RoomTypeService){}
  ngOnInit() {
    this.rooms = this.roomTypeService.getRoomTypes();           // comment when api is available
    // this.roomTypeService.getRoomTypes().subscribe(           //uncomment when api is available
    //   (res) => this.rooms = res
    // );
    this._interactionService.sendRoom(this.rooms[0], this.rooms[0].options[0], this.rooms[0].options[0].promo);
  }

  selectRoom(room, opt){
    this._interactionService.sendRoom(room, opt, opt.promo);
  }

}
