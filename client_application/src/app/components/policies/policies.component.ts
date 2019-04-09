import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {
  public houseRuleList = [
    "Smoking Rooms Only",
    "Pets are not allowed",
    "Credit/debit cards are accepted"
  ];
  public checkInCheckOutTime = "Check in: 2 PM | Check-out: 12 PM";
  constructor() { }

  ngOnInit() {
  }

}
