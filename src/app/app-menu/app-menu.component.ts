import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../Shared/breadcrumb.service';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {
  currentPageName : string;
  constructor(private breadService: BreadcrumbService) { }

  ngOnInit() {
    this.breadService.currentPageName.subscribe(message => this.currentPageName = message)
  }
}
