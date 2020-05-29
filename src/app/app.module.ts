import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './home/app.component';
import { EmployeeService } from './service/employee.service';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent  } from './child/child.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { FormBuilderAssignmentComponent } from './form-builder-assignment/form-builder-assignment.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DashboardComponent,
    ParentComponent,
    ChildComponent,
    FormbuilderComponent,
    FormBuilderAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
  ,
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
