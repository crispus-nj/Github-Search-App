import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild('form') signup : ElementRef

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.signup) 
  }
}
