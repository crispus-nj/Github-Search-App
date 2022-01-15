import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RespositoriesService } from '../services/respositories.services';
import { UsersService } from '../services/users-services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = []
  userRepoData: any = []
  @ViewChild('form') signup: ElementRef

  constructor(
    private userService: UsersService,
    private userRepo : RespositoriesService
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    // console.log(this.signup) 
  }
  getRepos(user: any) {
    this.userService.getUser(user.value).subscribe(data => {
      this.users = data
      // console.log("User Data", data)
    }, err => {
      // console.log("Error Occurred", err)
    })

    // get user repos
    this.userRepo.getRepos(user.value).toPromise().then(
      data => {
        this.userRepoData = data
        console.log("User repo Data", data)
      }, err => {
        console.log("User repo Err", err)
      }
    )
  }
}
