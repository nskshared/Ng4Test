/**
 * Created by sneelapala on 9/26/2017.
 */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Employee} from '../shared/type/employee.type';
@Injectable()
export class EmployeeService {
  private employees: Array<any>;
  
  getEmployees() {
    return this.employees;
  }
  
  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }
  
  constructor(private http: Http) {
    /*this.http.get('./employees.json').subscribe(data => {
     // Read the result field from the JSON response.
     this.employees = data['results'];
     });*/
    
    this.employees = [
      {
        "empId":9991,
        "jobTitleName":"Developer",
        "firstName":"Romin",
        "lastName":"Irani",
        "phoneNumber":"408-123-2560",
        "emailAddress":"romin.k.irani@gmail.com",
        "skills":[
          1,
          2,
          3,
          4,
          5,
          9
        ]
      },
      {
        "empId":9992,
        "jobTitleName":"Senior Developer",
        "firstName":"Sunil",
        "lastName":"Narang",
        "phoneNumber":"408-123-4527",
        "emailAddress":"sunil.narang@gmail.com",
        "skills":[
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ]
      },
      {
        "empId":9993,
        "jobTitleName":"Manager",
        "firstName":"Ashley",
        "lastName":"Judd",
        "phoneNumber":"408-323-4897",
        "emailAddress":"Ashley.Judd@gmail.com",
        "skills":[
          1,
          2,
          3,
          4,
          5,
          6,
          8,
          9
        ]
      }
    ];
    
  }
  
  
}
