import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'gantabya-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  error = false;
  formSubmitted = false;

  constructor(private _fb: FormBuilder, private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login(user) {
    this.formSubmitted = true;
    this.loading = true;
    if (this.loginForm.valid) {
      const userPayload = {
        email: user.email,
        password: user.password
      }
      this._authService.login(userPayload)
          .subscribe(
              response => {
                localStorage.setItem('current_user', JSON.stringify(response));
                this._router.navigate(['/home-page'])
              },
              error => {
                this.error = true;
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
