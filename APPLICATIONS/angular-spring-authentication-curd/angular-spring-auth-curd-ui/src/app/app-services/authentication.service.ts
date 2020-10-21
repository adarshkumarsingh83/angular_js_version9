import { Injectable } from '@angular/core';
import { Authentication } from './beans/authentication';
import { User } from './beans/user';
import { Data } from './beans/data';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:8080';
  private corsUrl = 'http://localhost:4200';

  constructor(private httpClient: HttpClient) {
    console.log(`AuthenticationService.constructor()`);
  }

  public loginUser(
    userName: String,
    userPwd: String
  ): Observable<Data<Authentication>> {
    console.log(`AuthenticationService.loginUser()`);
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', this.corsUrl);
    return this.httpClient.post<Data<Authentication>>(
      `${this.baseUrl}/login`,
      { userName: userName, userPwd: userPwd },
      { headers: httpHeaders }
    );
  }

  public registerUser(user: User): Observable<Data<User>> {
    console.log(`AuthenticationService.registerUser()`);
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', this.corsUrl);
    return this.httpClient.post<Data<User>>(`${this.baseUrl}/register`, user, {
      headers: httpHeaders,
    });
  }
}
