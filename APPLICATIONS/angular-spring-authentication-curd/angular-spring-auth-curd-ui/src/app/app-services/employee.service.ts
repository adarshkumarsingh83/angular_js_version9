import { Injectable } from '@angular/core';
import { Employee } from './beans/employee';
import { SecurityUtilService } from '../security/security-util.service';
import { Observable } from 'rxjs';
import { Data } from './beans/data';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(
    private securityUtilService: SecurityUtilService,
    private httpClient: HttpClient
  ) {
    console.log('EmployeeService.constructor()');
  }

  public getEmployees(): Observable<Data<Employee[]>> {
    console.log('EmployeeService.getEmployees()');
    const userContext = this.securityUtilService.getFromStorge();
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('content-type', 'application/json');
    httpHeaders = httpHeaders.append(userContext.key, userContext.userToken);
    return this.httpClient.get<Data<Employee[]>>(`${this.baseUrl}/employees`, {
      headers: httpHeaders,
    });
  }

  public saveEmployee(employee: Employee): Observable<Data<Employee>> {
    console.log('EmployeeService.saveEmployee()');
    const userContext = this.securityUtilService.getFromStorge();
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('content-type', 'application/json');
    httpHeaders = httpHeaders.append(userContext.key, userContext.userToken);
    return this.httpClient.post<Data<Employee>>(
      `${this.baseUrl}/employee`,
      employee,
      { headers: httpHeaders }
    );
  }

  public deleteEmployee(id: Number): Observable<Data<Employee>> {
    console.log('EmployeeService.deleteEmployee()', id);
    const userContext = this.securityUtilService.getFromStorge();
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('content-type', 'application/json');
    httpHeaders = httpHeaders.append(userContext.key, userContext.userToken);
    return this.httpClient.delete<Data<Employee>>(
      `${this.baseUrl}/employee/${id}`,
      { headers: httpHeaders }
    );
  }

  public getEmployee(id: Number): Observable<Data<Employee>> {
    console.log('EmployeeService.getEmployee()', id);
    const userContext = this.securityUtilService.getFromStorge();
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('content-type', 'application/json');
    httpHeaders = httpHeaders.append(userContext.key, userContext.userToken);
    return this.httpClient.get<Data<Employee>>(
      `${this.baseUrl}/employee/${id}`,
      { headers: httpHeaders }
    );
  }

  public updateEmployee(
    id: Number,
    employee: Employee
  ): Observable<Data<Employee>> {
    console.log('EmployeeService.updateEmployee()', id);
    const userContext = this.securityUtilService.getFromStorge();
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('content-type', 'application/json');
    httpHeaders = httpHeaders.append(userContext.key, userContext.userToken);
    return this.httpClient.put<Data<Employee>>(
      `${this.baseUrl}/employee/${id}`,
      employee,
      { headers: httpHeaders }
    );
  }
}
