import { Observable, of } from "rxjs";

export function isUserLoggedIn(): Observable<boolean> {
  return of(getUser() !== null && getUser() !== undefined && getUser() !== "");
}

export function userLoggedIn(): boolean {
  return getUser() !== null && getUser() !== undefined && getUser() !== "";
}

export function setUser(userName: string): void {
  sessionStorage.setItem("userName", userName);
}

export function getUser(): string {
  return sessionStorage.getItem("userName");
}

export function clearUser() {
  sessionStorage.removeItem("userName");
}
