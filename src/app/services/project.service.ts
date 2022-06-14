import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models';
const API_URL = 'http://localhost:3001/projects';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  create(product: Project): Observable<Project> {
    return this.http.post<Project>(API_URL, product);
  }

  read(): Observable<Project[]> {
    return this.http.get<Project[]>(`${API_URL}?_expand=categoryProject`);
  }

  update(product: Project): Observable<Project> {
    return this.http.put<Project>(`${API_URL}/${product.id}`, product);
  }

  destroy(id: string): Observable<Project> {
    return this.http.delete<Project>(`${API_URL}/${id}`);
  }

  get(id: string): Observable<Project> {
    return this.http.get<Project>(`${API_URL}/${id}?_expand=categoryProject`);
  }
}
