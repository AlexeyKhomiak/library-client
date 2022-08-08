import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  localUrl: string;
  fileData: string = "";

  constructor(public service: BookService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.service.postBook().subscribe(
      res => {
        if (res.id) {
          alert("book saved: id=" + res.id);
        }
        this.resetForm(form);
        this.service.getAllBooks();
      },
      err => {
        console.log(err);
      }
    )
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.fileData = "";
    this.service.formData = new Book();
    this.service.labelText = "Add Book";
  }

  chooseImg(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        this.service.formData.cover = this.localUrl;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
