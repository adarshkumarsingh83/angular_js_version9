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

    return null;
  }
}
