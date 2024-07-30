import { Component } from '@angular/core';
import { AuthorserviceService } from '../services/authorservice.service';
import { PublisherserviceService } from '../services/publisherservice.service';
import { BookserviceService } from '../services/bookservice.service';
import { Datum } from 'src/app/shared/interfaces/AuthorResponse';
import { DatumPusblisher } from 'src/app/shared/interfaces/PublisherResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-register',
  templateUrl: './book-register.component.html',
  styleUrls: ['./book-register.component.css']
})
export class BookRegisterComponent {


  authors: Datum[] = [];
  publishers: DatumPusblisher[] = [];
  book = {
    title: '',
    image: '',
    author_id: null,
    publisher_id: null
  };

  constructor(
    private authorService: AuthorserviceService,
    private publisherService: PublisherserviceService,
    private bookService: BookserviceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadAuthors();
    this.loadPublishers();
  }

  loadAuthors(): void {
    this.authorService.getAuthors().subscribe(
      data => this.authors = data.data,
      error => console.error('Error fetching authors', error)
    );
  }

  loadPublishers(): void {
    this.publisherService.getPublishers().subscribe(
      data => this.publishers = data.data,
      error => console.error('Error fetching publishers', error)
    );
  }

  onSubmit(): void {
    this.bookService.registerBook(this.book).subscribe(
      response => {
        console.log('Book registered successfully', response);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Error registering book', error);
      }
    );
  }

}
