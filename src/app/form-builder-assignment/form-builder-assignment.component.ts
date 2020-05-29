import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmailMatch } from './cross-validator';

@Component({
  selector: 'app-form-builder-assignment',
  templateUrl: './form-builder-assignment.component.html',
  styleUrls: ['./form-builder-assignment.component.scss']
})
export class FormBuilderAssignmentComponent implements OnInit {

  mainFormGroup: FormGroup;
  intFormGroup: FormGroup;
  title:string = "Form Builder Assignment";

  // Submit only enabled if all form controls are fulfilled
  submitted:boolean = false;
  
  constructor( private formBuilder:FormBuilder) { }

  // Create a form with validation
  // 8-9 fields
  ngOnInit(): void {
    
    this.intFormGroup = this.formBuilder.group({
      jobTitle: ['Full Stack Developer',[Validators.required]],
      manager:  ['Bhaskar',[Validators.required]],
      companyName:  ['Sollers',[Validators.required]]
    })

    this.mainFormGroup = this.formBuilder.group({
      firstName:  ['Joshua', Validators.required],
      lastName:   ['Ho', Validators.required],
      email:      ['ho.joshua4@gmail.com', [Validators.email, Validators.required] ],
      verifyEmail: [''],
      age:        ['' , [Validators.min(17), Validators.max(73), Validators.required] ],
      salary:     ['',[Validators.required]],
      career:     this.intFormGroup
    }, {
      validator: EmailMatch('email', 'verifyEmail')
    })

  }

  get formControls() { return this.mainFormGroup.controls; }
  get intFormControls() { return this.intFormGroup.controls; }
  
  submitForm(): void {
    this.submitted = true;

    //Here we submit all form data
    if (this.mainFormGroup.invalid){
      return;
    }

    alert('SUCCESS' + JSON.stringify( this.mainFormGroup.value ));

  }

}
