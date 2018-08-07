import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BreadcrumbService {
  private currentSource = new BehaviorSubject('Welcome Page');

  currentPageName = this.currentSource.asObservable();

  constructor() { }

  changeMessage(message:string){
    this.currentSource.next(message);
  }
}