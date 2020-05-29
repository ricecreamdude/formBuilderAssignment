import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AppComponent } from './home/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParentComponent  } from './parent/parent.component';
import { FormBuilderAssignmentComponent } from './form-builder-assignment/form-builder-assignment.component';

const routes:Routes= [{path:'employee', component:EmployeeComponent},
                        {path:'dashboard', component:DashboardComponent},
                        {path:'', redirectTo:'dashboard', pathMatch:'full'},
                        {path:'parent', component:ParentComponent, pathMatch:'prefix'},
                        {path:'formBuilder', component:FormBuilderAssignmentComponent}]; //localhost:3736/parent/:id/details
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


//RouterModule - 

//forRoot - 
//forChild - 

//Form Group - 

//Form Control - 

//How to communicate sibling components - 

