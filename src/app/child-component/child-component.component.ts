//import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersDataService } from '../myServices/users-data.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  
  @Output() notify: EventEmitter<any> = new EventEmitter();

  user:any
  constructor(private userdata: UsersDataService) {
    this.userdata.users().subscribe((data) => {
      this.user = data;
      this.notify.emit(this.user);
    })
  }
  
  ngOnInit(): void {


  }
  

}
