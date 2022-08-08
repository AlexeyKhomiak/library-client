import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
 
  activeFlg: boolean = true;
  
  constructor(public service: BookService) { }

  ngOnInit(): void {
    this.service.getAllBooks();
  }

  setActiveTab(activeTab: string) {
    if(activeTab=="all")
    {
      this.service.getAllBooks();
      this.activeFlg = true;
    } else {
      this.service.getRecommendedBooks();
      this.activeFlg = false;
    }
  }

  

}
