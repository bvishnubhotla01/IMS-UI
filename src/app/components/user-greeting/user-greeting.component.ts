import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { clearUser, getUser } from "src/app/shared/app-utility";

@Component({
  selector: "app-user-greeting",
  templateUrl: "./user-greeting.component.html",
})
export class UserGreetingComponent {
  loggedIn: Observable<boolean> = this.userService.isUserLoggedIn();
  userName = getUser();
  constructor(private router: Router, private userService: UserService) {}

  logout() {
    clearUser();
    this.router.navigate(["/login"]);
  }
}
