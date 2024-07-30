import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorByIDResponse, AuthorResponse, AuthorUpdateResponse } from 'src/app/shared/interfaces/AuthorResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthorserviceService {

  private apiUrl = 'http://localhost:8080/author';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<AuthorResponse> {
    return this.http.get<AuthorResponse>(this.apiUrl);
  }


  registerAuthor(book: any): Observable<AuthorResponse> {
    return this.http.post<AuthorResponse>(this.apiUrl, book);
  }

  getAuthorById(id:string):Observable<AuthorByIDResponse>{
    return this.http.get<AuthorByIDResponse>(`${this.apiUrl}/${id}`);
  }

  updateAuthor(book:any,id:string):Observable<AuthorUpdateResponse>{
    return this.http.put<AuthorUpdateResponse>(`${this.apiUrl}/${id}`,book);
  }

  deleteAuthor(id:string):Observable<String>{

    return this.http.delete<String>(`${this.apiUrl}/${id}`);
  }
}
