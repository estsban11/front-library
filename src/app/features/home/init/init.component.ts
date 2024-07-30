import { Component } from '@angular/core';
import { BookserviceService } from '../services/bookservice.service';
import { Datum } from '../../../shared/interfaces/BooksListResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent {

   books : Datum[] = [];
  constructor(private bookService: BookserviceService, private router: Router ) {

  }

  ngOnInit(): void {

    this.bookService.getData().subscribe(
      response=>{
        this.books = response.data;
        console.log(response.data);
      }
    )

  }

  navigate(){
    this.router.navigate(['/home/register-book']);
  }



}
