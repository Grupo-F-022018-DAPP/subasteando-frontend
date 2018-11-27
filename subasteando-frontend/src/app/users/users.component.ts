import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit() {
    console.log(this.service.hola());
  }

}
