import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models';
const API_URL = 'http://localhost:3001/user';
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  update(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(API_URL, profile);
  }

  read(): Observable<Profile> {
    return this.http.get<Profile>(API_URL);
  }
}
