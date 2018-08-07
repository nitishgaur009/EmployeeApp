import { Component, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'app';

  ngOnDestroy(){
    return false;
  }

//   @HostListener('window:beforeunload', ['$event'])
//   public beforeunloadHandler($event) {
//   $event.returnValue = "Are you sure?";
//  }
}
