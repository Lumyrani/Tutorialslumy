import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FreetutComponent } from './freetut/freetut.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisteredtutComponent } from './registeredtut/registeredtut.component';
import { TutorialsComponent } from './tutorials/tutorials.component';


const routes: Routes = [
  {
    path:'',redirectTo:'/free',pathMatch:'full'
  },
  {
    path:'free',component:FreetutComponent
  },
  {
    path:'registered',component:RegisteredtutComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'tutorials',component:TutorialsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
