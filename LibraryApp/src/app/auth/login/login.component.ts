import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;
  constructor(private router: Router, private _snackBar: MatSnackBar, private http:HttpClient) {}

  ngOnInit(): void {
    this.initializeForm();

  }

  initializeForm() {
    this.logInForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  logIn() {
    //todo
    const body={
      email: this.logInForm.get('email')?.value,
      password: this.logInForm.get('password')?.value
      // email:"eve.holt@reqres.in",
      // password:"cityslicka"
    }
    this.http.post("https://reqres.in/api/login", body).subscribe(
      (res:any)=>{
        console.log(res)
        this.router.navigateByUrl('');
        this._snackBar.open('Log In Successfully!', '', {
        duration: 2000,
    });
    window.localStorage.setItem("token", res.token)
      },(error)=>{
        console.error(error)
        this._snackBar.open(error.error.error, '',{
          duration:2000,
        });
      }

    )    
  }

  get email() {
    return this.logInForm.get('email');
  }

  get password() {
    return this.logInForm.get('password');
  }
}
