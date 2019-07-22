import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //@ViewChild('drawer',{static: true}) drawer: MatDrawer;

  constructor() { }

  ngOnInit() {
  }

  changeDrawerState(e) {
    //this.drawer.toggle();
  }

}
