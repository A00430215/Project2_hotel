import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {


  @Output() pageNumberClick = new EventEmitter<number>();
  @Input() numberOfPages;
  pages : number[];

  constructor() { }

  ngOnInit() {
    this.pages = new Array(this.numberOfPages);
  }

  pageNumberClicked(pageNumber: number){
    this.pageNumberClick.emit(pageNumber);
  }
  
}
