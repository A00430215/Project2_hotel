import { Component, OnInit, Input } from '@angular/core';
import { HeadServiceService } from 'src/app/services/head-service.service';
import { Router } from '@angular/router';
import { Helpers } from 'src/app/helpers/helpers';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  @Input() customer :any;
  constructor(private headServiceService: HeadServiceService,private router: Router, private helpers: Helpers) { }

  ngOnInit() {
  }

  logout(){

    this.helpers.logout();

    this.router.navigate(['/login']);
  }

}
