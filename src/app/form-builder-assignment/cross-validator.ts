import { FormGroup } from '@angular/forms';

//Custom Validation
//Cross Field Validation (Two Fields, 'controlName', 'matchingControlName')


export function EmailMatch( email: string, repeat: string){
  return (formGroup: FormGroup) => {

    const control = formGroup.controls[email];
    const matchingControl = formGroup.controls[repeat];

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