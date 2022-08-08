import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import { SimpleModalService } from "ngx-simple-modal";
import { ViewBookComponent } from './view-book/view-book.component';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {

  constructor(public service: BookService, private simpleModalService: SimpleModalService) { }
  
  @Input() book: Book;

  ngOnInit(): void {
    
  }

  populateForm(selectedBookId: number) {
    this.service.getBookDetail(selectedBookId).subscribe((bookItem: any) => {
      this.service.formData = bookItem;
      this.service.labelText = "Edit Book";
    });
  }

  showDetail(bookId: number) {
    this.service.getBookDetail(bookId).subscribe((bookItem: any) => {
      this.simpleModalService.addModal(ViewBookComponent, {
        title: bookItem.title,
        author: bookItem.author,
        cover: bookItem.cover,
        content: bookItem.content,
        rating: bookItem.rating,
        reviewsNumber: bookItem.reviewsNumber,
        reviews: bookItem.reviews
      })
    });
  }

}
