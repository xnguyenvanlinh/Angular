import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../models';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:3001/products';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  list(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(API_URL);
  }
  get(id: string | number): Observable<IProduct> {
    return this.http.get<IProduct>(`${API_URL}/${id}`);
  }
  destroy(id: string): Observable<IProduct> {
    return this.http.delete<IProduct>(`${API_URL}/${id}`);
  }
  update(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${API_URL}/${product.id}`, product);
  }
  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(API_URL, product);
  }
}
