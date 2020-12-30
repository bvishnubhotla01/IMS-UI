import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { map, shareReplay, takeWhile } from "rxjs/operators";
import { clearUser, isUserLoggedIn, userLoggedIn } from "./shared/app-utility";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
