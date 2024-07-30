import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublisherserviceService } from '../services/publisherservice.service';

@Component({
  selector: 'app-publisher-register',
  templateUrl: './publisher-register.component.html',
  styleUrls: ['./publisher-register.component.css']
})
export class PublisherRegisterComponent {
  publisher: any = { name: '', address: '' };
  isEditMode: boolean = false;
  publisherId:string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private publisherService: PublisherserviceService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEditMode = true;
      this.publisherId = id;
      this.loadAuthor(this.publisherId);
    }
  }

  loadAuthor(id: string): void {
    this.publisherService.getPublisherById(id).subscribe(
      data => this.publisher = data.data,
      error => console.error('Error fetching author', error)
    );
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.publisherService.updatePublisher(this.publisher,this.publisherId).subscribe(
        response => {
          console.log('Publisher updated successfully', response);
          this.router.navigate(['/home/publisher-list']);
        },
        error => console.error('Error updating author', error)
      );
    } else {
      this.publisherService.registerPublisher(this.publisher).subscribe(
        response => {
          console.log('Author registered successfully', response);
          this.router.navigate(['/home/publisher-list']);
        },
        error => console.error('Error registering author', error)
      );
    }
  }
}
