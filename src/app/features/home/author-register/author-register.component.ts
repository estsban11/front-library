import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorserviceService } from '../services/authorservice.service';

@Component({
  selector: 'app-author-register',
  templateUrl: './author-register.component.html',
  styleUrls: ['./author-register.component.css']
})
export class AuthorRegisterComponent {
  author: any = { name: '', lastname: '' };
  isEditMode: boolean = false;
  authorId:string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authorService: AuthorserviceService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEditMode = true;
      this.authorId = id;
      this.loadAuthor(this.authorId);
    }
  }

  loadAuthor(id: string): void {
    this.authorService.getAuthorById(id).subscribe(
      data => this.author = data.data,
      error => console.error('Error fetching author', error)
    );
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.authorService.updateAuthor(this.author,this.authorId).subscribe(
        response => {
          console.log('Author updated successfully', response);
          this.router.navigate(['/home/author-list']);
        },
        error => console.error('Error updating author', error)
      );
    } else {
      this.authorService.registerAuthor(this.author).subscribe(
        response => {
          console.log('Author registered successfully', response);
          this.router.navigate(['/home/author-list']);
        },
        error => console.error('Error registering author', error)
      );
    }
  }

}
