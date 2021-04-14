import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  flag:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    this.flag = true;
  }
  closeNav() {
    this.flag = false;
  }

}
