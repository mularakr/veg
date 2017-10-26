import { Component } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';
  userAuthenticated:boolean;
  adminAuthenticated:boolean;
  customerUsername;
  adminUsername;
  constructor(
    private localStorageService:LocalStorageService
){}
  
  logout(){
    this.localStorageService.remove("customerUsername","customerPassword");
    this.localStorageService.remove("adminUsername","adminPassword");
    this.localStorageService.remove("userAuthenticated");
    this.localStorageService.remove("adminAuthenticated");
    location.href="/";
}
changeOfRoutes(){
  console.log("user auth: "+ this.localStorageService.get("userAuthenticated"));
  console.log("admin auth: "+ this.localStorageService.get("adminAuthenticated"));
  this.userAuthenticated=Boolean(this.localStorageService.get("userAuthenticated"));
  this.adminAuthenticated=Boolean(this.localStorageService.get("adminAuthenticated"));
  this.customerUsername=this.localStorageService.get("customerUsername");
  this.adminUsername=this.localStorageService.get("adminUsername");
  
  }
}
