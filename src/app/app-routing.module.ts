import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent },
  {path:'user',component:UserComponent},
  {path:'add-user',component:AddUserComponent},
  {path:'details-user',component:AddUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
