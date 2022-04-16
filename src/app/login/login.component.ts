import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//for creating reactive form we need to add form component
import { FormBuilder,FormGroup,FormControl,Validator,NgForm } from '@angular/forms';
import { LoginService } from '../Services/login.service';

import {User} from '../Models/login.model'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForms!: FormGroup;
  UserListObject : any=[];
  user : User[]=[];
  // userobj: User = new this.UserListObject()

  constructor(private _router:Router,private _formBuilder:FormBuilder,private _loginService:LoginService) {   //inject Router server in our componet
  }

  ngOnInit(): void {
      this.loginForms = this._formBuilder.group({
      txtUserId: new FormControl(),
      txtPassword : new FormControl()

    })
  }
//Click on button login

  EmployeeLogin(){
     this._loginService.getEmplAPIUrlforEmployeeoyeeByUserName().
     subscribe(res => {
       this.user = res;
       var userInArray = this.user.filter(x => x.Name === (this.loginForms.value).txtUserId);

       if(userInArray.length > 0)
       {
         localStorage.setItem("myLoginObject", JSON.stringify(userInArray));
         this._router.navigateByUrl('/employee');

       }else{
        localStorage.setItem("myLoginObject","");
         alert('Invalid User Name and Passowrd!');
       }

    }
  );
  }



}
