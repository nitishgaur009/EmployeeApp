import {NgModule} from '@angular/core'
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { EmployeeRegistrationComponent } from '../Employee/employee-registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { EmployeeService } from './employee.service';
import { CommonModule } from '../../../node_modules/@angular/common';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild([
            { 
                path: '', 
                component: EmployeeListComponent, 
                canActivate:[AuthService]
            },
            { 
                path: 'add-employee', 
                component: EmployeeRegistrationComponent, 
                canActivate:[AuthService],
                canDeactivate:[AuthService]
            }      
          ]),
    ],
    declarations:[
        EmployeeListComponent,
        EmployeeDetailsComponent,
        EmployeeRegistrationComponent
    ],
    providers: [EmployeeService, AuthService],
})

export class EmployeeModule{

}