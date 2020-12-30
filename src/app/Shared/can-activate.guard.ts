import { Injectable } from "@angular/core";
import { CanActivate, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";
import { mergeMap } from "rxjs/operators";
import { isUserLoggedIn } from "./app-utility";

@Injectable()
export class CanActivateGuard implements CanActivate {
  canActivate():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return isUserLoggedIn().pipe(
      mergeMap((isLoggedIn: boolean) => {
        return of(isLoggedIn);
      })
    );
  }
}
