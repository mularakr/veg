import {Component,OnInit } from '@angular/core';
import {AppService} from '../services/app.service';
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
    selector:'login-comp',
    templateUrl:'./login.component.html',
  
})
export class LoginComponent implements OnInit {
    userAuthenticated:boolean=this.localStorageService.get("userAuthenticated")==null ? false:Boolean(this.localStorageService.get("userAuthenticated"));
    loginData:any;
    username:string;
    password:string;
    records: Array<any>;
    
    index:any=0;
    constructor(
        private appService:AppService,
        private localStorageService:LocalStorageService
    ){}

    ngOnInit() {
        this.records= [
          { ID: 1,  contact: "+17218384", Description: "Coffees, teas" },
          { ID: 2,  contact: "+17218383", Description: "Sweet and savory sauces" },
          { ID: 3,  contact: "17618383", Description: "Desserts and candies" },
          { ID: 4,  contact: "17218353",  Description: "Smetana, Quark and Cheddar Cheese" },
          { ID: 5,  contact: "17218333", Description: "Breads, crackers, pasta, and cereal" },
          { ID: 6,  contact: "16218383", Description: "Beers, and ales" },
          { ID: 7,  contact: "12218383", Description: "Selishes, spreads, and seasonings" },
          { ID: 8,  contact: "47218383", Description: "Sweet breads" },
          { ID: 9,  contact: "15218383",  Description: "Cheese Burger" },
          { ID: 10, contact: "172183836", Description: "Breads, crackers, pasta, and cereal" }
         ];
         // this.sort(this.column);
      }
    userlogin(value:any){
     
      this.appService.userlogin()
      .subscribe((response:any) => {
        Array.prototype.forEach.call(response ,child=> {
            if(value.username== child.username && value.password== child.password){
                console.log(child.username + " logged in");
                
                this.localStorageService.set("customerUsername", child.username);
                this.localStorageService.set("userAuthenticated", true);
                this.userAuthenticated=true;
            }
        });
       
        if(this.userAuthenticated){
            location.href= location.pathname;
        }
        },
        (errorResponse:any)=>this.loginData=errorResponse);
       console.log("user : "+ this.localStorageService.get("customerUsername"));
    }
    

}