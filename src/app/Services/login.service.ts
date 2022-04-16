import { Injectable } from '@angular/core';

//Import http client
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../Models/login.model';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
 APIUrl = "https://localhost:44317/api";
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
  getEmplAPIUrlforEmployeeoyeeByUserName():Observable <User[]>
  {
    return this.http.get<User[]>(this.APIUrlforEmployee);
  }

}
