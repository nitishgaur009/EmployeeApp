import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../Shared/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input('empData') employee:Employee;

  @Output() messageEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

   sendMessageClick():void{
     this.messageEvent.emit('Hello this is message from employee :'+ this.employee.FirstName );
   }
}
