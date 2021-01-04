import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { IUser } from "../models/user";
import { getUser } from "../shared/app-utility";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private serviceUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}

  public getUser(
    userName: string,
    password: string
  ): Observable<HttpResponse<IUser>> {
    const url = `${this.serviceUrl}/Users/get/${userName}`;
    return this.http.get<IUser>(url, { observe: "response" });
  }

  public isUserLoggedIn(): Observable<boolean> {
    return of(
      getUser() !== null && getUser() !== undefined && getUser() !== ""
    );
  }
}
