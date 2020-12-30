import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'ims-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  user: IUser = null;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('userName')  && sessionStorage.getItem('userName') !== '' && sessionStorage.getItem('userName') !== undefined) {
      this.router.navigate(['products']);
    }
  }

  login($event) {
    this.userService.getUser($event).subscribe(result => {
      if (result?.status === 200) {
        this.user = result.body;
        sessionStorage.setItem('userName', result.body.UserName);
        this.router.navigate(['products']);
      }
    }, (err: HttpErrorResponse) => {
      if (err.status === 404) {
        alert("Invalid username and/or password. Please try again.");
      }
    }); 
  }
}
