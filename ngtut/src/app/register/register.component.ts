import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registeredUserData={email:'',password:''}
  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
  }
registerUser(){
  // console.log(this.registeredUserData)

this.authService.registerUser(this.registeredUserData).subscribe(
  res=>{
    this.router.navigate(['/registered'])
    console.log(res)
    localStorage.setItem('token',res.token)
  },
  err=>console.log(err)
)

}
}
