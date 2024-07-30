import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorResponse } from 'src/app/shared/interfaces/AuthorResponse';
import { ListBooksResponse } from 'src/app/shared/interfaces/BooksListResponse';
import { GetBookByID } from 'src/app/shared/interfaces/GetBook';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  private apiUrl = 'http://localhost:8080/book';

  constructor(private http: HttpClient) { }

  getData(): Observable<ListBooksResponse>{

    return this.http.get<ListBooksResponse>(this.apiUrl);
  }

  registerBook(book: any): Observable<AuthorResponse> {
    return this.http.post<AuthorResponse>(this.apiUrl, book);
  }

  getBookById(id:string):Observable<GetBookByID>{
    return this.http.get<GetBookByID>(`${this.apiUrl}/${id}`);
  }

  updateBook(book:any,id:string):Observable<GetBookByID>{
    return this.http.put<GetBookByID>(`${this.apiUrl}/${id}`,book);
  }

  deleteBook(id:string):Observable<String>{
    return this.http.delete<String>(`${this.apiUrl}/${id}`);
  }

}
