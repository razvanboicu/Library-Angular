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
  
  rememberMe: boolean = false;
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
        // const body = {
    //   email: this.logInForm.get('email')?.value,
    //   password: this.logInForm.get('password')?.value
    //   // email:"eve.holt@reqres.in",
    //   // password:"cityslicka"
    // }
    
    let body = new FormData();
    body.append('Username', this.logInForm.get('email')?.value);
    body.append('Password', this.logInForm.get('password')?.value);

    this.http.post("https://localhost:7153/users/login", body,{responseType:'text'}).subscribe(
      (res:any) => {
        console.log(res)
        this.router.navigateByUrl('');
        this._snackBar.open('Log In Successfully!', '', {
        duration: 2000,
        
      });
      //console.log(res.token);
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
