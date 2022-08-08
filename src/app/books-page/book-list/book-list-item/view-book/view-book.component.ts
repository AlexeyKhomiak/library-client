import { Component, Input } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";

export interface ConfirmModel {
  title:string;
  author:string;
  cover:string;
  content:string;
  rating:number;
  reviewsNumber:number;
  reviews:[];
}

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})

export class ViewBookComponent extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel {
  
  title: string;
  author: string;
  cover: string;
  content: string;
  rating: number;
  reviewsNumber: number;
  reviews: [];
  
  constructor() {
    super();
  }
  
  closeModal() {
    this.close();
  }

}
