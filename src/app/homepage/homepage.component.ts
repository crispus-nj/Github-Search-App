import { Component, OnInit } from '@angular/core';
import { RespositoriesService } from '../services/respositories.services';
import { UsersService } from '../services/users-services';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  userData: any = []
  myRepoData: any = []

  userName = "engineer237"
  isFetching = false
  error = null
  constructor(
    private userService : UsersService,
    private repoService : RespositoriesService
  ) { }

  ngOnInit(): void {
    // get my infomation
    this.userService.getUser(this.userName).subscribe(
      data => {
        this.userData = [data]
        this.isFetching = true
        console.log("my repo", data)
      }, err => {
        this.isFetching = false
        this.error = err.message
        console.log("error", err.message)
      }
    )
      this.repoService.getRepos(this.userName).subscribe(data => {
        this.myRepoData = data
        console.log("My repo Data:", data)
      }, err => {
        console.log("my repo error",err)
      })
  }

}
