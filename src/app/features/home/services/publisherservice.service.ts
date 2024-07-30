import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatumPusblisher, PublisherRegisterResponse, PublisherResponse } from 'src/app/shared/interfaces/PublisherResponse';
import { PublisherRegisterComponent } from '../publisher-register/publisher-register.component';

@Injectable({
  providedIn: 'root'
})
export class PublisherserviceService {

  private apiUrl = 'http://localhost:8080/publisher';

  constructor(private http: HttpClient) { }

  getPublishers(): Observable<PublisherResponse> {
    return this.http.get<PublisherResponse>(this.apiUrl);
  }


  registerPublisher(publisher: any): Observable<PublisherRegisterResponse> {
    return this.http.post<PublisherRegisterResponse>(this.apiUrl, publisher);
  }

  getPublisherById(id:string):Observable<PublisherRegisterResponse>{
    return this.http.get<PublisherRegisterResponse>(`${this.apiUrl}/${id}`);
  }

  updatePublisher(publisher:any,id:string):Observable<PublisherRegisterResponse>{
    return this.http.put<PublisherRegisterResponse>(`${this.apiUrl}/${id}`,publisher);
  }

  deletePublisher(id:string):Observable<String>{
    return this.http.delete<String>(`${this.apiUrl}/${id}`);
  }
}
