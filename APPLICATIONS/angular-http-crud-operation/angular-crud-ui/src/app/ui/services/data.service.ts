import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Data } from '../model/data';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'http://localhost:8080/api';
  corsUrl ='http://localhost:4200';

  constructor(private httpClient: HttpClient) {}

  saveData(userData: User): Observable<Data<User>> {
    console.log(`DataService.saveData()  ` + JSON.stringify(userData));
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', this.corsUrl);
    return this.httpClient.post<Data<User>>(`${this.baseUrl}/user`,userData, { headers: httpHeaders })
    .pipe(
      catchError(this.errorHandler)
    );     
  }


  updateData(id: number ,userData: User): Observable<Data<User>> {
    console.log(`DataService.updateData()  ` + JSON.stringify(userData));
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', this.corsUrl);
    return this.httpClient.put<Data<User>>(`${this.baseUrl}/user/${id}`, userData, { headers: httpHeaders })
    .pipe(
      catchError(this.errorHandler)
    );
  }

  deleteData(id: number): Observable<Data<User>> {
    console.log(`DataService.deleteData()  ${id}`);
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', this.corsUrl);
    return this.httpClient.delete<Data<User>>(`${this.baseUrl}/user/${id}`, { headers: httpHeaders })
    .pipe(
      catchError(this.errorHandler)
    );
  }

  getData(id: number): Observable<Data<User>> {
    console.log(`DataService.getData()  ${id}`);
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', this.corsUrl);
    return this.httpClient.get<Data<User>>(`${this.baseUrl}/user/${id}`, { headers: httpHeaders })
    .pipe(
      catchError(this.errorHandler)
    );
  }

  getDataList(): Observable<Data<User[]>> {
    console.log(`DataService.getDataList() `);
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', this.corsUrl);
    return this.httpClient.get<Data<User[]>>(`${this.baseUrl}/users`, { headers: httpHeaders })
    .pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(`Exception handler ${errorMessage}`)
    return throwError(errorMessage);
 }
}
