import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users-services';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  userData: any = []
  userName = "engineer237"
  isFetching = false

  constructor(
    private userService : UsersService
  ) { }

  ngOnInit(): void {
    this.userService.getUser(this.userName).subscribe(
      data => {
        this.userData = [data]
        this.isFetching = true
        console.log("my repo", data)
      }, err => {
        console.log("error", err.message)
      }
    )
  }

}
