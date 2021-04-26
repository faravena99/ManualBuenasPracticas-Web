import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component implements OnInit {

  public opened: boolean = false;
 
  public toggleSidebar() {
    this.opened = !this.opened;

   
  }
  constructor() { }

  ngOnInit(): void {
  }

}
