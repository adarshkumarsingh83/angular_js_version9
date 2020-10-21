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

  private securityUtilService: SecurityUtilService;

  constructor(
    securityUtilService: SecurityUtilService,
    private httpClient: HttpClient
  ) {
    this.securityUtilService = securityUtilService;
  }

  public getEmployees(): Observable<Data<Employee[]>> {
    const userContext = this.securityUtilService.getFromStorge();
    console.log('EmployeeService.getEmployees()', userContext);
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('content-type', 'application/json');
    httpHeaders = httpHeaders.append(userContext.key, userContext.userToken);
    return this.httpClient.get<Data<Employee[]>>(`${this.baseUrl}/employees`, {
      headers: httpHeaders,
    });
  }

  public saveEmployee(employee: Employee): Observable<Data<Employee>> {
    const userContext = this.securityUtilService.getFromStorge();
    console.log('EmployeeService.saveEmployee()', employee);
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
    const userContext = this.securityUtilService.getFromStorge();
    console.log('EmployeeService.deleteEmployee()', id);
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('content-type', 'application/json');
    httpHeaders = httpHeaders.append(userContext.key, userContext.userToken);
    return this.httpClient.delete<Data<Employee>>(
      `${this.baseUrl}/employee/${id}`,
      { headers: httpHeaders }
    );
  }

  public getEmployee(id: Number): Observable<Data<Employee>> {
    const userContext = this.securityUtilService.getFromStorge();
    console.log('EmployeeService.getEmployee()', id);
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
    const userContext = this.securityUtilService.getFromStorge();
    console.log('EmployeeService.updateEmployee()', id);
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
