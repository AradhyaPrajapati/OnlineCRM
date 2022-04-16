import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';

import { ReactiveFormsModule } from '@angular/forms';
//import for http client module in main module and import httpclient in service class
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [           //register the template only
    AppComponent,
    EmployeeComponent,
    LoginComponent
  ],
  imports: [               //Register the module in main module
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
