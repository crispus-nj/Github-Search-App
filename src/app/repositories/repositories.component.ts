import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  constructor() { }
  @ViewChild('form') repo: ElementRef
  ngOnInit(): void {
  }
  onSubmit() {
    this.repo
  }
}
