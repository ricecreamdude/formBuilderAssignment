import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PasswordMatch } from '../validator/validator';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.scss']
})
export class FormbuilderComponent implements OnInit {

  //Instantiate our properties

  registerForm: FormGroup;
  submitted = false;

  //Inject the FormBuilder service
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    //FormBuilder service returns new instantiations of form groups to our form.
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    }, {
      validator: PasswordMatch('password', 'confirmPassword')
    })

  }

  get registerFormControls() { return this.registerForm.controls; }

  onSubmit(){

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
