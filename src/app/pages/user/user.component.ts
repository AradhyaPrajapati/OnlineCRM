import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/login.model';
import { LoginService } from 'src/app/Services/login.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

UserList:User[]=[];
  constructor( private _LoginService:LoginService) { }

  ngOnInit(): void {

    this._LoginService.getEmployeeList().subscribe(res=>{
      this.UserList =  res;
    }
      );


  }

//   getByTypeData(): Observable<any[]> {

//     return this._LoginService.getEmployeeList()
//         .subscribe(response => {
//             ///const config = response.result ? response.data : {};
//             return esponse.data;
//         });
// }


DisplayobjUser( objUser:User)
{

}
}
