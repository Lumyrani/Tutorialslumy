import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private url ="http://localhost:3000/api/register"
private login_url ="http://localhost:3000/api/login"
private tutorial_url ="http://localhost:3000/api/tutorials"

  constructor(private http:HttpClient) { }

registerUser(user:any){
 return this.http.post<any>(this.url,user)
}
tutorialUser(tutorial:any){
  return this.http.post<any>(this.tutorial_url,tutorial)

 }
loginUser(user:any){
  return this.http.post<any>(this.login_url,user)
}
loggedIn(){
  return !!localStorage.getItem('token')
}
getToken(){
  return localStorage.getItem('token')
}
}
