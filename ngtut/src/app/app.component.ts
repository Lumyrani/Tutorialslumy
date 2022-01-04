import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

AuthService
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService:AuthService , private router:Router){}
  title = 'ngtut';
  logOut(){
  localStorage.removeItem('token')
  this.router.navigate(['/login'])
  }

}
