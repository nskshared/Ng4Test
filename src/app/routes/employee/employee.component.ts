import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../shared/type/employee.type';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import {EditFormComponent} from './edit-form/edit-form.component';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  private employeeDataChange: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>([]);
  private employeeColumns = ['empId', 'jobTitleName', 'firstName', 'lastName', 'phoneNumber', 'emailAddress', 'skills', 'actions'];
  private employeeDataSource: EmployeeDataSource | null;
  
  constructor(public dialog: MdDialog, private employeeService: EmployeeService) {
    console.log('employee started');
  }

  ngOnInit() {
    this.employeeDataChange.next(this.employeeService.getEmployees());
    this.employeeDataSource = new EmployeeDataSource(this.employeeDataChange);
  }

  showAddEmployeePopup() {
    const dialogRef = this.dialog.open(EditFormComponent, {
      width: '400px',
      height: '600px',
    });
  }
}

export class EmployeeDataSource extends DataSource<Employee> {
  constructor(private _dataChange: BehaviorSubject<Employee[]>) {
    super();
  }
  
  connect(): Observable<Employee[]> {
    return this._dataChange;
  }
  
  disconnect() {
  }
}
