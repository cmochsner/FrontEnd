import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  sendReg(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'Authorization': 'my-auth-token'
      })
    };

    this.httpClient.post<User>('localhost:8080/BackEnd/user', user, httpOptions).subscribe();
  }
}
