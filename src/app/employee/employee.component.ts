import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  @Input() datatoemployee:string;

  employeeName:string='abc';
  imageurl:string="assets/image/angular.jpg";

  employees:Employee[]=[{Name:'Zach', Age:30, Exp:3},{Name:'Eric', Age:30, Exp:3}];

  //How to use a Form Control instance
  singleControl = new FormControl( 'John', Validators.required); //Create an instance. 'John' is a placeholder

  //Grouping Form Controls
  employeeNameFormGroup:FormGroup = new FormGroup( {
    // firstName: new FormControl('Erik', [Validators.required]),
    // lastName: new FormControl('Johnson', [Validators.required])

    firstName: new FormControl('Erik'),
    lastName: new FormControl('Johnson')
  })

  get firstName() {
    return this.employeeNameFormGroup.get('firstName');
  }

  get lastName() {
    return this.employeeNameFormGroup.get('lastName');
  }

  //Create a form group to manage our form controls
  //https://angular.io/api/forms/FormGroup#description

  //Our goal is to created a form group within a form group
  sollersEmployeeFormGroup:FormGroup = new FormGroup( {
    firstName: new FormControl("Pooja", [Validators.required]),
    lastName: new FormControl("Shukla", [Validators.required]),
    // innerForm: new FormGroup({

    // })
  })

  get formControls(){
    return this.sollersEmployeeFormGroup.controls;
  }

  submit()
  {

    alert( this.sollersEmployeeFormGroup.controls["firstName"].value );
    // console.log(this.name.value);

    // console.log( this.employeeNameFormGroup.get('firstName').value );
    // this.employeeNameFormGroup.setValue({firstName:"Ho", lastName:"Joshua"});
  }


  nameChange()
  {

    alert(this.singleControl.value);
    this.singleControl.setValue("Helloooo");

    this.sollersEmployeeFormGroup.setValue({
      firstName: "Form Group",
      lastName: "Working",
    });


    this.sollersEmployeeFormGroup.valid;


    alert(JSON.stringify( this.sollersEmployeeFormGroup.value) );
  }

  //Injectors allow you to loosely couple components

}
  
interface Employee{
  Name:string,
  Age:number,
  Exp:number
}