import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private serviceUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }

  public getUser(userName: string): Observable<HttpResponse<IUser>> {
    const url = `${this.serviceUrl}/Users/${userName}`;
    return this.http.get<IUser>(url, {observe: 'response'});
  }

}
