import { NgModule,OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { AdminComponent } from '../login/admin.component';
import { LocalStorageService } from 'angular-2-local-storage';
import {SignupComponent} from '../login/signup.component';
const routes:Routes=[
    { path:'userlogin', component: LoginComponent },
    { path:'adminlogin', component:AdminComponent},
    { path:'signup',component:SignupComponent},
    { path: '',
      redirectTo: '/userlogin',
      pathMatch: 'full'
    },
];
@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
      RouterModule
  ]
})
export class RoutingModule implements OnInit{
  adminUsername:string;
  adminPassword:string;
  adminAuthenticated:boolean;
  userAuthenticated:boolean;
  constructor(
    private localStorageService:LocalStorageService
){}
  ngOnInit(){
    console.log("called");
    if(this.localStorageService.get("username")!= null ){
        this.adminAuthenticated=false;
        this.userAuthenticated=Boolean(this.localStorageService.get("userAuthenticated")); 
    }else if(this.localStorageService.get("adminUsername")!= null){
        this.userAuthenticated=false;
        this.adminAuthenticated=Boolean(this.localStorageService.get("adminAuthenticated")); 
    }
}
}


export const routingComponents=[  LoginComponent,AdminComponent,SignupComponent ];
