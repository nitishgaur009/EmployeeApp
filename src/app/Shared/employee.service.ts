import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';
import {Observable} from 'rxjs';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  readonly url = "http://localhost/AngularAPI/EmployeeAPI/";

  registerEmployee(emp:Employee) : Observable<any>{
    return this._http.post(this.url + 'api/Employee', emp);
  }

  getAllEmployees():Observable<Employee[]>{
    return this._http.get<Employee[]>(this.url+'api/employee');
  }
}
