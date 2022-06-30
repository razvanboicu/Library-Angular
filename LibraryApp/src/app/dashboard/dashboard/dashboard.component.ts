import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MovieModel } from 'src/app/model/movie.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  movieData: MovieModel[] = [
    {
      name: 'Star Wars',
      description: 'Not bad',
      category: 'SF',
      rating: '3',
    },
    {
      name: "Harry Potter",
      description: "Good good",
      category: "Magical",
      rating: "5"
    },
    {
      name: "Avengers",
      description: "Cool",
      category: "SF",
      rating: "4"
    },
    {
      name: "Minions",
      description: "Amazing",
      category: "Cartoon",
      rating: "5"
    },
    {
      name: "Fury",
      description: "Great",
      category: "War",
      rating: "5"
    }
  ];

  constructor(private router: Router, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void { }

  logout() {
    window.localStorage.removeItem("token");
    this.router.navigateByUrl('/auth/login');
    this._snackBar.open('Log Out Successfully!', '', {
      duration: 2000,
    });
  }
}

