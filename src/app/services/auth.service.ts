import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const API_URL = 'http://localhost:3001';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(user: any) {
    return this.http.post(`${API_URL}/signup`, user);
  }

  signin(user: any) {
    return this.http.post(`${API_URL}/signin`, user);
  }
}
