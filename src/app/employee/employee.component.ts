import { Component, OnInit } from '@angular/core';

//Inject service which you want to use in on this page, here i am injecting employee service
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList :string[]=[];     //Declare array type with string data type
  constructor( private _employeeService: EmployeeService) //Injected employee service on constructor
   {

   }

  ngOnInit(): void {

    this.employeeList = this._employeeService.getEmployeeList();


  }

  btnClick()
  {
    alert("you have clicked me! thanks");
  }

}
