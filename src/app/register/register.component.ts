import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services';
import { PasswordValidation } from '../validators/confirmpassword.validator';
import { Router } from '@angular/router';

@Component({
    selector: 'gantabya-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registrationForm: FormGroup;
    loading = false;
    formSubmitted = false;
    errors = [];

    constructor(private _fb: FormBuilder, private _authService: AuthService, private _router: Router) { }

    ngOnInit() {
        this.registrationForm = this._fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            password_confirmation: ['', [Validators.required]]
        }, {
            validator: PasswordValidation.MatchPassword
        });
    }

    register(newUser) {
        this.formSubmitted = true;
        this.loading = true;
        if (this.registrationForm.valid) {
            const userPayload = {
                email: newUser.email,
                password: newUser.password,
                password_confirmation: newUser.password_confirmation
            }
            this._authService.register(userPayload)
                .subscribe(
                    response => {
                        localStorage.setItem('current_user', JSON.stringify(response));
                        this._router.navigate(['/home-page'])
                    },
                    error => {
                        const signupErrors = error.errors;
                        if (signupErrors.email.includes('has already been taken')) {
                            this.errors.push('duplicate_email');
                            this.registrationForm.controls['email'].markAsPristine();
                        }
                        this.loading = false;
                    }
                );
        } else {
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        }
    }
}
