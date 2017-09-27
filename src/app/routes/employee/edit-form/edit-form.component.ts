import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../shared/type/employee.type';
import {EmployeeImpl} from '../../../shared/model/employee.model';
import {EmployeeService} from '../../../services/employee.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  private employee: Employee;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new EmployeeImpl();
  }
  
  addEmployee() {
    this.employeeService.addEmployee(this.employee);
  }
}
