import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Shared/employee.service';
import { Employee } from '../Shared/employee.model';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { BreadcrumbService } from '../Shared/breadcrumb.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[];
  clickedEmployee:Employee;
  internalMessage:string;

  constructor(
    private _employeeService: EmployeeService,
    private _breadService: BreadcrumbService) { }

  ngOnInit() {
    this._employeeService.getAllEmployees()
    .subscribe((data)=> this.employees = data);
    
    this._breadService.changeMessage('Employee List');
  }

  detailsClick(Id):void{
        this.clickedEmployee = this.employees.find(e => e.Id === Id);
  }

  receiveMessage($event):void{
    this.internalMessage = $event;
  }
}
