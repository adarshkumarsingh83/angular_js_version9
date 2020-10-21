import { Injectable } from '@angular/core';
import { SecurityUtilService } from '../security/security-util.service';
import { Observable } from 'rxjs';
import { Data } from './beans/data';
import { User } from './beans/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(
    private securityUtilService: SecurityUtilService,
    private httpClient: HttpClient
  ) {
    console.log('UsersService.constructor()');
  }

  public getUsers(): Observable<Data<User[]>> {
    console.log('UsersService.getUsers()');
    const userContext = this.securityUtilService.getFromStorge();
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('content-type', 'application/json');
    httpHeaders = httpHeaders.append(userContext.key, userContext.userToken);
    return this.httpClient.get<Data<User[]>>(`${this.baseUrl}/users`, {
      headers: httpHeaders,
    });
  }

  public saveUser(user: User): Observable<Data<User>> {
    console.log('UsersService.saveUser()', user);
    const userContext = this.securityUtilService.getFromStorge();
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('content-type', 'application/json');
    httpHeaders = httpHeaders.append(userContext.key, userContext.userToken);
    return this.httpClient.post<Data<User>>(`${this.baseUrl}/user`, user, {
      headers: httpHeaders,
    });
  }

  public deleteUser(userId: Number): Observable<Data<User>> {
    console.log('UsersService.deleteUser()', userId);
    const userContext = this.securityUtilService.getFromStorge();
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('content-type', 'application/json');
    httpHeaders = httpHeaders.append(userContext.key, userContext.userToken);
    return this.httpClient.delete<Data<User>>(
      `${this.baseUrl}/user/${userId}`,
      {
        headers: httpHeaders,
      }
    );
  }

  public getUser(userId: Number): Observable<Data<User>> {
    console.log('UsersService.getUser()', userId);
    const userContext = this.securityUtilService.getFromStorge();
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('content-type', 'application/json');
    httpHeaders = httpHeaders.append(userContext.key, userContext.userToken);
    return this.httpClient.get<Data<User>>(`${this.baseUrl}/user/${userId}`, {
      headers: httpHeaders,
    });
  }

  public updateUser(userId: Number, user: User): Observable<Data<User>> {
    console.log('UsersService.updateUser()', userId);
    const userContext = this.securityUtilService.getFromStorge();
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('content-type', 'application/json');
    httpHeaders = httpHeaders.append(userContext.key, userContext.userToken);
    return this.httpClient.put<Data<User>>(
      `${this.baseUrl}/user/${userId}`,
      user,
      {
        headers: httpHeaders,
      }
    );
  }
}
