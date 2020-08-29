import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  public storeOnStorage(data: object): Observable<any> {
    console.log(`DataService.storeOnLocalStorage()  ` + JSON.stringify(data));
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    return this.httpClient
      .post(`${this.baseUrl}/user`,data, { headers: httpHeaders });     
  }

  public updateDataOnStorage(id: string, data: object): object {
    console.log(`DataService.storeOnLocalStorage()  ` + JSON.stringify(data));
    var responseBean;
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    this.httpClient
      .put(`${this.baseUrl}/user/${id}`, data, { headers: httpHeaders })
      .subscribe((response) => {
        responseBean = response;
      });
    return responseBean;
  }


  public deleteFromStorage(id: string): object {
    console.log(`DataService.deleteStorage()`);
    var responseBean;
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    this.httpClient
      .delete(`${this.baseUrl}/user/${id}`, { headers: httpHeaders })
      .subscribe((response) => {
        responseBean = response;
      });
    return responseBean;
  }

  public getFromStorage(id: string):Observable<any> {
    console.log(`DataService.getFromStorage() `);
    var responseBean;
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    return this.httpClient
      .get(`${this.baseUrl}/user/${id}`, { headers: httpHeaders });
  }
  

  public getDataList(): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Access-Control-Allow-Origin', 'http://localhost:4200');
   return this.httpClient
      .get(`${this.baseUrl}/users`, { headers: httpHeaders });
      
  }
}
