import { Injectable } from '@angular/core';

//Import http client
import {HttpClient,HttpHeaders, JsonpClientBackend} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../Models/login.model';
import { stringify } from '@angular/compiler/src/util';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  //Web API Application is coreAPI on , default Login ABC , xyx
  //local location url: D:\Latest_Technology_Aug2021\CoreAPI
 APIBaseUrl = "https://localhost:44317/api/user/";
 APIUrlforEmployee="https://localhost:44317/api/user/GetUsersOverrite?id=0";

  constructor(private http:HttpClient) { } //Inject httpclient service

  //Bind response data in object model, It is mostly used
/*
  getEmplAPIUrlforEmployeeoyeeByUserName():Observable <User[]>
  {
    return this.http.get<User[]>(this.APIUrlforEmployee);
  }
*/

//Bind response data in any data model
  getEmployeeList():Observable <User[]>
  {
    return this.http.get<User[]>(this.APIUrlforEmployee);
  }

  getUserById(Id:number):Observable <User>
  {
    return this.http.get<User>(this.APIBaseUrl+'getUserById/id='+Id);
  }

  AddEmployee(user:User):Observable <User>
  {
    const headers = {'content-type':'application/json'}
    //const body = JSON.stringify(user);
    //console.log(body);
    return this.http.post<User>(this.APIBaseUrl+'AddUser',user,{'headers':headers});
  }

  EditEmployee(user:User):Observable <any>
  {
    const headers = {'content-type':'application/json'}
    const body = JSON.stringify(user);
    return this.http.post(this.APIBaseUrl+"UpdateUser",body,{'headers':headers});
  }

  DeleteEmployee(id:number):Observable <any>
  {
    return this.http.delete(this.APIBaseUrl+"DeleteUser/id"+id);
  }

}
