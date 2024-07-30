import { Component } from '@angular/core';
import { AuthorserviceService } from '../services/authorservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
  authors: any[] = [];

  constructor(private authorService: AuthorserviceService, private router: Router) { }

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors(): void {
    this.authorService.getAuthors().subscribe(
      data => this.authors = data.data,
      error => console.error('Error fetching authors', error)
    );
  }

  onUpdateClick(authorId: number): void {
    this.router.navigate([`/home/author/update/${authorId}`]);
  }

  onNavigateRegister(){
    this.router.navigate(['/home/author/new']);
  }

  onDeleteClick(authorId: number): void {
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
        this.authorService.deleteAuthor(authorId.toString()).subscribe(
          response => {
            Swal.fire(
              'Removed',
              'The book has been deleted',
              'success'
            );
            this.authors = this.authors.filter(author => author.id !== authorId);
          },
          error => {
            console.error('Error deleting author', error);
          }
        );
      }
    });
  }
}
