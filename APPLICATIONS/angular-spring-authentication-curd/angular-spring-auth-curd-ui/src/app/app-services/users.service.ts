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
  ) {}

  public getUsers(): Observable<Data<User[]>> {
    const userContext = this.securityUtilService.getFromStorge();
    console.log('UsersService.getUsers()', userContext);
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('content-type', 'application/json');
    httpHeaders = httpHeaders.append(userContext.key, userContext.userToken);
    return this.httpClient.get<Data<User[]>>(`${this.baseUrl}/users`, {
      headers: httpHeaders,
    });
  }

  public saveUser(user: User): Observable<Data<User>> {
    const userContext = this.securityUtilService.getFromStorge();
    console.log('UsersService.saveUser()', userContext);
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('content-type', 'application/json');
    httpHeaders = httpHeaders.append(userContext.key, userContext.userToken);
    return this.httpClient.post<Data<User>>(`${this.baseUrl}/user`, user, {
      headers: httpHeaders,
    });
  }

  public deleteUser(userId: Number): Observable<Data<User>> {
    const userContext = this.securityUtilService.getFromStorge();
    console.log('UsersService.deleteUser()', userContext);
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
    const userContext = this.securityUtilService.getFromStorge();
    console.log('UsersService.getUser()', userContext);
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('content-type', 'application/json');
    httpHeaders = httpHeaders.append(userContext.key, userContext.userToken);
    return this.httpClient.get<Data<User>>(`${this.baseUrl}/user/${userId}`, {
      headers: httpHeaders,
    });
  }

  public updateUser(userId: Number, user: User): Observable<Data<User>> {
    const userContext = this.securityUtilService.getFromStorge();
    console.log('UsersService.updateUser()', userContext);
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
