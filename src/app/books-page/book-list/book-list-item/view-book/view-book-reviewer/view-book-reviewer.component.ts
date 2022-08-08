import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/models/review.model';

@Component({
  selector: 'app-view-book-reviewer',
  templateUrl: './view-book-reviewer.component.html',
  styleUrls: ['./view-book-reviewer.component.css']
})

export class ViewBookReviewerComponent implements OnInit {

  @Input() review: Review;

  constructor() { }

  ngOnInit(): void {
  }

}
