import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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

  public getProduct(id: string): Observable<IProduct> {
    const url = `${this.serviceUrl}/Products/get/${id}`;
    return this.http.get<IProduct>(url);
  }

  public addProduct(product: IProduct): Observable<IProduct> {
    const url = `${this.serviceUrl}/Products/create`;
    return this.http.post<IProduct>(url, product, { withCredentials: true });
  }

  public editProduct(product: IProduct): Observable<boolean> {
    const url = `${this.serviceUrl}/Products/edit`;
    return this.http.post<boolean>(url, product, {
      withCredentials: true,
    });
  }

  public deleteProduct(products: IProduct[]): Observable<boolean> {
    const url = `${this.serviceUrl}/Products/delete`;
    return this.http.post<boolean>(url, products, { withCredentials: true });
  }
}
