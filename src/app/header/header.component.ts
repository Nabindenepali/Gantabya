import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'gantabya-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn = false;

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('current_user')) {
      this.loggedIn = true;
    }
  }

  logout() {
    this._authService.logout();
    this._router.navigate(['/login']);
  }

}
