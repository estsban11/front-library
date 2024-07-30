import { Component, Input } from '@angular/core';
import { Datum, ListBooksResponse } from '../interfaces/BooksListResponse';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/features/home/services/bookservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-book-list-component',
  templateUrl: './book-list-component.component.html',
  styleUrls: ['./book-list-component.component.css']
})
export class BookListComponentComponent {


  constructor(private router:Router,private bookService:BookserviceService){}

  @Input() books: Datum[] = [] ;

  onBookClick(bookId: number): void {
    this.router.navigate([`/home/update-book/${bookId}`]);
  }

  onDeleteClick(bookId: number, event: Event): void {
    event.stopPropagation();
    Swal.fire({
      title: 'You are sure?',
      text: "You won't be able to reverse this",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.bookService.deleteBook(bookId.toString()).subscribe(
          response => {
            Swal.fire(
              'Removed',
              'The book has been deleted',
              'success'
            );
            this.books = this.books.filter(book => book.id !== bookId);
          },
          error => {
            console.error('Error deleting book', error);
          }
        );
      }
    });
  }
}
