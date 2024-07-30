import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from 'src/app/shared/interfaces/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private apiUrl = 'http://localhost:8080/auth';
  constructor(private http: HttpClient) {

  }

  login(){
    
    return this.http.get<AuthResponse>(this.apiUrl);
  }
}
