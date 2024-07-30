import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService } from '../services/bookservice.service';
import { AuthorserviceService } from '../services/authorservice.service';
import { PublisherserviceService } from '../services/publisherservice.service';
import { Datum } from 'src/app/shared/interfaces/AuthorResponse';
import { DatumPusblisher } from 'src/app/shared/interfaces/PublisherResponse';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent {

  book = {
    title: '',
    image: '',
    author_id: 0,
    publisher_id: 0
  };
  authors: Datum[] = [];
  publishers: DatumPusblisher[] = [];

  constructor(
    private authorService: AuthorserviceService,
    private publisherService: PublisherserviceService,
    private route: ActivatedRoute,
    private router:Router,
    private bookService: BookserviceService
  ) { }


  ngOnInit(): void {
    this.loadBook();
    this.loadAuthors();
    this.loadPublishers();

    console.log(this.book);
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

  loadBook(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.bookService.getBookById(bookId).subscribe(
        data => this.book = {
          title: data.data.title,
          image: data.data.image,
          author_id: data.data.author.id,
          publisher_id: data.data.publisher.id
        },
        error => console.error('Error fetching book', error)
      );
    }
  }

  onUpdate(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
  if(bookId){
    this.bookService.updateBook(this.book,bookId).subscribe(
      response => {
        console.log(this.book);
        console.log('Book updated successfully', response);
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Error updating book', error);
      }
    );
  }
  }


}
