import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, CanDeactivate } from '@angular/router';
import { EmployeeRegistrationComponent } from '../Employee/employee-registration.component';

@Injectable()
export class AuthService implements CanActivate, CanDeactivate<EmployeeRegistrationComponent>{
     constructor(private _router: Router){
     }

    canActivate(route: ActivatedRouteSnapshot): boolean{

        // const path = route.url[0].path.toLowerCase();
        // let allowed:boolean = false;

        // switch(path){
        //     case 'employee':
        //     allowed = true;
        //     break;

        //     case 'employees':
        //     allowed = true;
        //     break;
        // }   

        // if(allowed === false){
        //     this._router.navigate(['./welcome']);
        // }

        return true;
    }

    canDeactivate(emp:EmployeeRegistrationComponent):boolean{
        return emp.isValid();
    }
}