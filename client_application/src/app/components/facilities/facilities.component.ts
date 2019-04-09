import { Component, OnInit } from '@angular/core';
import { FacilitiesService } from 'src/app/services/facilities.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {  

  public amenitiesList: any;
  constructor(private facilitiesService: FacilitiesService) { }


  ngOnInit() {
    this.amenitiesList = this.facilitiesService.getFacilities();            // remove when api is ready
    // this.facilitiesService.getFacilities().subscribe(                    // uncomment when api is ready
    //   (res) => this.amenitiesList = res,
    //   (err) => alert("couldn't fetch data")
    // );

  }

}
