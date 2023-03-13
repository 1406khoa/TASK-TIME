import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserByUid(uid: string | undefined) {
    return this.http.get<User>(`http://localhost:3000/api/users/${uid}`);
  }

  createUser(user: User) {
    return this.http.post<User>(`http://localhost:3000/api/users`, user);
  }

}
