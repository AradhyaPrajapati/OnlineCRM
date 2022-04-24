import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validator, NgForm } from '@angular/forms';
import { User } from 'src/app/Models/login.model';
import { LoginService } from 'src/app/Services/login.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  AddUserForms : FormGroup;
user :User;
  constructor(
    private _formbuilder :FormBuilder,private _loginServices:LoginService
    ) { }

  ngOnInit(): void {
    this.user=
      {Id:0,Name:"Hari",Password:"Oom" ,Mobile:"983391099",Email:"abc@gmail.com",IsActive:true}
  }

  SaveNewUser(){
    this._loginServices.AddEmployee(this.user).subscribe(res=>
      {
        console.log(res);
      });
    alert('Record added successfully.')
  }

}
