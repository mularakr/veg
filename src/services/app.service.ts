import { Injectable } from '@angular/core';
import {  Http,Response } from  '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppService{

constructor(private http:Http){}
_user_url:string='/assets/userlogincredentials.json';
_admin_url:string="/assets/adminlogincredentials.json"
  userlogin():any{
    return this.http.get(this._user_url)
    .map((response:Response) => response.json()) //here we are converting it into Observalbe
    .catch(this.errorHandler);
  }
  
  adminlogin():any{
    return this.http.get(this._admin_url)
    .map((response:Response) => response.json()) //here we are converting it into Observalbe
    .catch(this.errorHandler);
  }
  errorHandler(error:Response){
      return Observable.throw(error||"Server error");
  }

}
