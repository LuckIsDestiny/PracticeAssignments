import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  fetch() {
    return this.http.get<any[]>("https://fakestoreapi.com/products");
  }
}
