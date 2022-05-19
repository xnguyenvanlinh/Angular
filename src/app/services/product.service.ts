import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models';
const API_URL = 'http://localhost:3001/products';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<IProduct[]>(API_URL);
  }
  get(id: string | number) {
    return this.http.get(`${API_URL}/${id}`);
  }
}
