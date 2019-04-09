import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeadServiceService {

  public name: any = "";
  constructor() { }

  getName(){
    return this.name + "    ";
  }

  setName(name: any){
    this.name = name;
  }

}
