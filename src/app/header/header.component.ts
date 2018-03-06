import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gantabya-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn = false;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('current_user')) {
      this.loggedIn = true;
    }
  }

}
