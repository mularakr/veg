import {Component} from '@angular/core';
import {AppService} from '../services/app.service';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
    selector:'admin-comp',
    templateUrl:'./admin.component.html'

})
export class AdminComponent{
    adminUsername:string;
    adminPassword:string;
    adminAuthenticated:boolean=this.localStorageService.get("adminAuthenticated")==null ? false:Boolean(this.localStorageService.get("adminAuthenticated"));
    loginData:any=null;
    adminame:string;
    adminLoginError;
    constructor(
        private appService:AppService,
        private localStorageService:LocalStorageService
    ){}
    adminlogin(value:any){
        
         this.appService.adminlogin()
         .subscribe((response:any) => {
             this.loginData = response;
             Array.prototype.forEach.call(response ,admin=> {
                if(value.adminusername== admin.username && value.adminpassword== admin.password){
                    console.log(admin.username + " logged in");
                   // this.adminame=String(this.localStorageService.get("adminUsername"));
                    this.localStorageService.set("adminUsername", admin.username);
                    this.localStorageService.set("adminAuthenticated", true);
                    this.adminAuthenticated=true;
                    this.adminLoginError=false;
                }else{
                    this.adminLoginError=true;
                }
            });
            if(this.adminAuthenticated){
                this.adminame=String(this.localStorageService.get("adminUsername"));
                console.log("refreshing");
             location.href= location.pathname;
         }
           },
           (errorResponse:any)=>this.loginData=errorResponse);
        
       }
}