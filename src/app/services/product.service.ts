import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { IProduct } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private serviceUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<IProduct[]> {
    const url = `${this.serviceUrl}/Products`;
    return this.http.get<IProduct[]>(url);
  }
}
