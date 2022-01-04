import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../tutorial.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-freetut',
  templateUrl: './freetut.component.html',
  styleUrls: ['./freetut.component.css']
})
export class FreetutComponent implements OnInit {
  tutorials:any=[]
// tutorials:any =[{name:"Node","duration":"3hr"}]
  constructor(private tutorialservice:TutorialService,private authService: AuthService ,private router:Router) { }
  ngOnInit(): void {
    this.tutorialservice.getFreeTut().subscribe(
    // res=> this.tutorials =res,
    // err=> console.log (err)
//     err=> {
//     if(err instanceof HttpErrorResponse){
//     if(err.status ===401){
//  this.router.navigate(['/login'])
//     }
//   }
// }
//     )

//   }
(result)=>{
  console.log("result",result)
  this.tutorials = result
  console.log("result2")},
  // err=> console.log (err)
    err=> {
    if(err instanceof HttpErrorResponse){
    if(err.status ===401){
 this.router.navigate(['/login'])
    }
  
}
})
  }

}
  // ngOnInit(): void {
  //   this.tutorialservice.getFreeTut().subscribe(
  //   // res=> this.tutorials =res,
  //   // err=> console.log (err)
  //   // )
  //   // this.authService.getFreeTut(this.authService).subscribe(
  //     res=> {this.tutorials =res
  //     console.log("freetut")}
  //   //   err=> {
  //   //     if(err instanceof HttpErrorResponse){
  //   //     if(err.status ===401){
  //   //  this.router.navigate(['/free'])
  //   //     }
  //   //   }
  //   // }
  //       )
  // }



// }
