import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../Shared/breadcrumb.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public pageTitle:string = new AV().getTitle(2);

  constructor(private breadService: BreadcrumbService) {
    this.breadService.changeMessage('Welcome page');
   }

  ngOnInit() {
    
  }

  timer = setTimeout(()=>  {
    this.pageTitle = "Hello again";
  }, 1000);
}

class AV{
   public getTitle(type:number):string{
    if(type === 1){
      return "Hello 1";
    }

    return "Hello World AV";
  }
}
