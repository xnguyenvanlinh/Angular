import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models';
const API_URL = 'http://localhost:3001/posts';
@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  create(post: Post): Observable<Post> {
    return this.http.post<Post>(API_URL, post);
  }

  read(): Observable<Post[]> {
    return this.http.get<Post[]>(API_URL);
  }

  update(post: Post): Observable<Post> {
    return this.http.put<Post>(`${API_URL}/${post.id}`, post);
  }

  destroy(id: string): Observable<Post> {
    return this.http.delete<Post>(`${API_URL}/${id}`);
  }

  get(id: string): Observable<Post> {
    return this.http.get<Post>(`${API_URL}/${id}?_expand=categoryBlog`);
  }

  getLimitBlog(limit: number): Observable<Post[]> {
    return this.http.get<Post[]>(
      `${API_URL}/?_expand=categoryPost&_limit=${limit}`
    );
  }
}
