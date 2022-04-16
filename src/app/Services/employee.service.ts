import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  msg:string ="";//| undefined;

  employeelist =["Ram krishan","Rahul Prajapati","Rajan Prajapati","Aradhya Prajapati","Ramsingh","Krishan singh"];

  constructor() {
   }

  getEmployeeList()
  {

    //http request get data from server
    return this.employeelist;

  }

}
