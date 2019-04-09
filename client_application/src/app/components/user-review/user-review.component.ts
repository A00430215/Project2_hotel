import { Component, OnInit } from '@angular/core';
import { UserReview } from 'src/app/models/user-review';
import { UserReviewService } from './user-review.service';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
export class UserReviewComponent implements OnInit {

  constructor(private userReviewService: UserReviewService) {

   }

  ngOnInit() {
    this.currentPage = 0;
    this.allReviews = this.userReviewService.getUserReviews()
    this.reviews = this.splitReviewsIntoChunks(this.allReviews);
  }


  public ratingCount: number;;
  public reviewCount: number;
  public currentPage: number;
  public reviews: UserReview[][];
  public allReviews = [];
  public localReviews = [];
  public cardsPerPage = 5;
   

  updatePage(pageNumber: number){
    this.currentPage = pageNumber;
  }

  splitReviewsIntoChunks(allReviews: any){
    this.reviewCount = allReviews.length;
    this.ratingCount = this.reviewCount;
  while (allReviews.length > 0) {
    this.localReviews.push(allReviews.splice(0, this.cardsPerPage));
  }
  return this.localReviews;
  }
}
