import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IUser } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";
import { setUser, userLoggedIn } from "src/app/shared/app-utility";

@Component({
  selector: "ims-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: IUser = null;
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    if (userLoggedIn()) {
      this.router.navigate(["products"]);
    }
  }

  login(userName: string, password: string): void {
    this.userService.getUser(userName, password).subscribe(
      (result) => {
        if (result?.status === 200) {
          this.user = result.body;
          setUser(result.body.UserName);
          this.router.navigate(["products"]);
        }
      },
      (err: HttpErrorResponse) => {
        if (err.status === 404) {
          alert("Invalid username and/or password. Please try again.");
        }
      }
    );
  }
}
