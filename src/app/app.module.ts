import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadingHighlighter } from './Shared/headingHighlighter.directive';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbService } from './Shared/breadcrumb.service';
import { WelcomeModule } from './welcome/welcome.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserModule } from '../../node_modules/@angular/platform-browser';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  
  { 
    path: 'employees', 
    loadChildren:'./Shared/employee.module#EmployeeModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeadingHighlighter,
    AppMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    WelcomeModule
  ],
  providers:[BreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
