import { Component, OnInit, ViewChild, OnDestroy, OnChanges } from '@angular/core';
import { Employee } from '../Shared/employee.model';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../Shared/employee.service';
import { Router } from '@angular/router';
import { BreadcrumbService } from '../Shared/breadcrumb.service';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  employee:Employee;

  constructor(private _employeeService: EmployeeService, 
    private router: Router,
    private _breadService:BreadcrumbService) { }

  ngOnInit() {
    this.employee = new Employee();
    this._breadService.changeMessage('Add Employee');
  }

  isValid():boolean{
    return true;
  }

  onSubmit(employeeForm: NgForm):void{
    if(!employeeForm.valid){
      alert('Please enter manadatory fields data.')
    }
    else{      
      this._employeeService.registerEmployee(employeeForm.value)
      .subscribe(() => {
        alert('Employee added successfully');
        this.router.navigate(['/employee']); 
      });
    }
  }
}
