import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-dashboard', 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  logout() {
    //todo
    window.localStorage.removeItem("token");
    this.router.navigateByUrl('/auth/login');
    this._snackBar.open('Log Out Successfully!', '', {
      duration: 2000,
    });
  }
}
