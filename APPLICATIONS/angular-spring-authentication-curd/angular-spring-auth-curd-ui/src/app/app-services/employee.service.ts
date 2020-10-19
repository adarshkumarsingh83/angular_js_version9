import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  public getEmployees(): Employee[] {
    return null;
  }

  public getEmployeeByName(name: string): Employee {
    return null;
  }
}
