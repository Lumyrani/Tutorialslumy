import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-registeredtut',
  templateUrl: './registeredtut.component.html',
  styleUrls: ['./registeredtut.component.css']
})
export class RegisteredtutComponent implements OnInit {

  tutorials:any =[]
  constructor(private tutorialservice:TutorialService, private router:Router) { }

  ngOnInit(): void {
    this.tutorialservice.getRegisteredTut().subscribe(
    res=> this.tutorials =res,
    // err=> console.log (err)
    err=> {
    if(err instanceof HttpErrorResponse){
    if(err.status ===401){
 this.router.navigate(['/login'])
    }
  }
}
    )

  }
  
}
