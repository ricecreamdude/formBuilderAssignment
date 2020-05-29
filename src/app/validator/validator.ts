import { FormGroup } from '@angular/forms';

//Custom Validation
//Cross Validation (Two Fields, 'controlName', 'matchingControlName')


export function PasswordMatch( controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {

    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    //Check to see if the control has errors
    if (matchingControl.errors){
      return;
    }

    //Compare the values of the two controls
    //If no match, set an error. Or else, set that there are no errors
    if (control.value !== matchingControl.value){
      matchingControl.setErrors({ mustMatch: true }); //Custom Parameter
      
    } else {
      matchingControl.setErrors( null );
    }

  }


}