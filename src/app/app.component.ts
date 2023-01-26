import { Component } from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';

import { UsersDataService } from './myServices/users-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-data';

  
  constructor() {

  }

  childData: any

  parentMethod(data: any) {
    this.childData = data;
    console.log(this.childData);

  }
  user: any
  onClick() {
    this.user = this.childData
  }


}
