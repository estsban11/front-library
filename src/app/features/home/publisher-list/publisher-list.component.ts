import { Component } from '@angular/core';
import { PublisherserviceService } from '../services/publisherservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.css']
})
export class PublisherListComponent {

  publishers: any[] = [];

  constructor(private publisherService: PublisherserviceService, private router: Router) { }

  ngOnInit(): void {
   this.loadPublishers();

  }
  loadPublishers(): void {
    this.publisherService.getPublishers().subscribe(
      data => this.publishers = data.data,
      error => console.error('Error fetching authors', error)
    );
  }

  onUpdateClick(publisherId: number): void {
    this.router.navigate([`/home/publisher/update/${publisherId}`]);
  }

  onNavigateRegister(){
    this.router.navigate(['/home/publisher/new']);
  }

  onDeleteClick(publisherId: number): void {
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
        this.publisherService.deletePublisher(publisherId.toString()).subscribe(
          response => {
            Swal.fire(
              'Removed',
              'The book has been deleted',
              'success'
            );
            this.publishers = this.publishers.filter(publisher => publisher.id !== publisherId);
          },
          error => {
            console.error('Error deleting author', error);
          }
        );
      }
    });
  }



}
