import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:3001/categoryProjects';
import { Category } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CategoryProjectService {
  constructor(private http: HttpClient) {}

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(API_URL, category);
  }

  read(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + '?_embed=projects');
  }

  update(category: Category): Observable<Category> {
    return this.http.put<Category>(`${API_URL}/${category.id}`, category);
  }

  destroy(id: string): Observable<Category> {
    return this.http.delete<Category>(`${API_URL}/${id}`);
  }

  get(id: string): Observable<Category> {
    return this.http.get<Category>(`${API_URL}/${id}`);
  }
}
