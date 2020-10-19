import { Injectable } from '@angular/core';
import { Authentication } from './authentication';
import { User } from './user';
import { Data } from './data';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:8080';
  private corsUrl = 'http://localhost:4200';

  constructor(private httpClient: HttpClient) {}

  public loginUser(
    userName: String,
    userPwd: String
  ): Observable<Data<Authentication>> {
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
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', this.corsUrl);
    return this.httpClient.post<Data<User>>(`${this.baseUrl}/login`, user, {
      headers: httpHeaders,
    });
  }
}
