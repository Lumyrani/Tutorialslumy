import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {
  // tutorials:any =[]
 tutorialUserData={name:'',duration:'',description:""}
  constructor(private tutorialservice:TutorialService, private router: Router,private authService: AuthService) { }

  ngOnInit(): void {}
  //   this.tutorialservice.getFreeTut().subscribe(
  //     res=> this.tutorials =res,
    
  //     // err=> console.log (err)
  //     err=> {
     
  // console.log(err)
  // }
  //     )
  
  //   }
    
  
tutorialUser(){
  console.log(this.tutorialUserData)

  this.authService.tutorialUser(this.tutorialUserData).subscribe(
    res=>{
    this.router.navigate(['/free'])}
  )
      
   
  }

}

//     // localStorage.setItem('token',res.token)



// }
// }
// this.authService.tutorialUser(this.loginUserData).subscribe(
//   res=>{
//     this.router.navigate(['/registered'])
//     console.log(res)
//     localStorage.setItem('token',res.token)
//   },
//   err=>console.log(err)
// )
// }
// }