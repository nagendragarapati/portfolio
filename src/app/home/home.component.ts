import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activetab = "Home";

  constructor() { }

  ngOnInit(): void {
  }
  
  

  getActiveTab(tabname:string){
    this.activetab = tabname;
  }

}
