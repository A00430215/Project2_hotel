import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-nav-features',
  templateUrl: './nav-features.component.html',
  styleUrls: ['./nav-features.component.css']
})
export class NavFeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToEl($element:any){
    var $window = $(window),
		elementTop = $element.offset().top,
		elementHeight = $element.height(),
		viewportHeight = $window.height(),
		scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);
 
  $('html, body').animate({
    scrollTop: scrollIt
  }, 1000);
  }

  goToDiv(ev:any){
    var el:any;
    var value = $(ev.target)[0].text;
    $("#navSticky .navLink").removeClass("active");
    $(ev.target).addClass('active');
    if(value == "Facilities"){
      el = $("#Facilities");
      this.scrollToEl(el);
    }
    else if(value == "Location"){
      el = $("#Location");
      this.scrollToEl(el);
    }
    else if(value == "Policies"){
      el = $("#Policies");
      this.scrollToEl(el);
    }
    else if(value == "Ratings and Reviews"){
      el = $("#UserReviews");
      this.scrollToEl(el);
    }
    else if(value == "Rooms"){
      el = $("#RoomType");
      this.scrollToEl(el);
    }
  }
}
