import {Component} from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
@Component({
    selector:'signup',
    templateUrl:'./signup.component.html'
})
export class SignupComponent{
    constructor(private localStorageService:LocalStorageService){}
    userregister(value:any){
        this.localStorageService.set("registerusername",value.registerusername);
        this.localStorageService.set("registerpassword",value.registerpassword);
    }
}