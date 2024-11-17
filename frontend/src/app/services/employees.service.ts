import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee_model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees');


  }
  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {
    addEmployeeRequest = {
      id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      name: addEmployeeRequest.name,
      email: addEmployeeRequest.email,
      phone: addEmployeeRequest.phone,
      salary: addEmployeeRequest.salary,
      department: addEmployeeRequest.department
    };
    console.log(addEmployeeRequest)
    return this.http.post<Employee>(this.baseApiUrl + '/api/employees', addEmployeeRequest);

  }
  getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + '/api/employees/' + id)
  }

  updateEmployee(id: string, updateEmployeeRequest: Employee):
    Observable<Employee> {
    return this.http.put<Employee>(this.baseApiUrl + '/api/employees/' + id,
      updateEmployeeRequest);

  }
  deleteEmployee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(this.baseApiUrl + '/api/employees/' + id);
  }
}
