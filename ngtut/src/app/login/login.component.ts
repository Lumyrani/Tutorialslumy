import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData={email:'',password:''}
  constructor(private authService :AuthService, private router:Router ) { }

  ngOnInit(): void {
  }
  loginUser(){
    // console.log(this.registeredUserData)
  
  this.authService.loginUser(this.loginUserData).subscribe(
    res=>{
      this.router.navigate(['/registered'])
      console.log(res)
      localStorage.setItem('token',res.token)
    },
    err=>console.log(err)
  )
  }
}
