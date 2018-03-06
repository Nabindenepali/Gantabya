import {AbstractControl} from '@angular/forms';

export class PasswordValidation {

  static MatchPassword(AC: AbstractControl) {
    const password = AC.get('password').value; // to get value in input tag
    const password_confirmation = AC.get('password_confirmation').value; // to get value in input tag
    if (password !== password_confirmation) {
      AC.get('password_confirmation').setErrors( {MatchPassword: true} );
    } else {
      return null;
    }
  }
}
