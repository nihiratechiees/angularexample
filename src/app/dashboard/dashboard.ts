import { Component } from '@angular/core';
import { Master } from '../service/master';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(public service: Master, private router: Router) {

  }

  logout() {
    this.service._isloggedin.set(false);
    this.router.navigate(['/login']);
    alert("Logged out successfully");
  }

}
