import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { BookListComponent } from './books-page/book-list/book-list.component';
import { BookListItemComponent } from './books-page/book-list/book-list-item/book-list-item.component';
import { EditBookComponent } from './books-page/edit-book/edit-book.component';
import { ViewBookComponent } from './books-page/book-list/book-list-item/view-book/view-book.component';
import { HttpClientModule } from '@angular/common/http';
import { defaultSimpleModalOptions, SimpleModalModule } from 'ngx-simple-modal';
import { ViewBookReviewerComponent } from './books-page/book-list/book-list-item/view-book/view-book-reviewer/view-book-reviewer.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    BookListComponent,
    BookListItemComponent,
    EditBookComponent,
    ViewBookComponent,
    ViewBookReviewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SimpleModalModule.forRoot({container: 'modal-container'}, {...defaultSimpleModalOptions, ...{
      closeOnEscape: true,
      closeOnClickOutside: true,
      animationDuration: 300,
      autoFocus: true

    }})
  ],
  providers: [],
  entryComponents: [
    ViewBookComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }