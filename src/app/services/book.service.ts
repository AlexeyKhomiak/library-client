import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book.model';

export interface IResponse {
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  readonly baseURL = "https://localhost:5000/api/";

  formData: Book = new Book();
  list: Book[];
  bookItem: Book;
  labelText: string = "Add Book";

  postBook() {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.append('Access-Control-Allow-Headers', 'Content-Type');
    return this.http.post<IResponse>(this.baseURL + "books/save", this.formData, { headers: headers });
  }

  getAllBooks() {
    this.http.get(this.baseURL + "books?order=title")
      .toPromise()
      .then(res => { this.list = res as Book[]; }, err => { console.log(err); });
  }

  getRecommendedBooks() {
    this.http.get(this.baseURL + "recommended")
      .toPromise()
      .then(res => { this.list = res as Book[]; }, err => { console.log(err); });
  }

  getBookDetail(id: number) {
    return this.http.get(this.baseURL + "books/" + id);
  }


}
