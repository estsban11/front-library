import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthserviceService,  private router: Router){}

  login(){
    this.authService.login().subscribe(
      response => {
        localStorage.setItem('token',response.data.jwt);
        this.router.navigate(['/home']);
      }
    )
  }
}
