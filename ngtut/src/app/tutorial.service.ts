import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  // private free_url ="http://localhost:3000/api/free"
  private registered_url ="http://localhost:3000/api/registered"
  private free_url ="http://localhost:3000/api/free"
  constructor(private http :HttpClient) { }

getFreeTut(){
  return this.http.get<any>(this.free_url)
}
getRegisteredTut(){
  return this.http.get<any>(this.registered_url)
}
// tutorialUser(){
//   return this.http.get<any>(this.tutorial_url)

//  }
}
