import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users-services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild('form') signup: ElementRef

  constructor(
    private userService : UsersService
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    // console.log(this.signup) 
  }
  getRepos(user: any) {
    this.userService.getUser(user.value).subscribe(data => {
      console.log("User Data",data)
    }, err => {
      console.log("Error Occurred", err)
    })
  }
}
