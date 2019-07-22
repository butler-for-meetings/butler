import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sideNavStateChanged = new EventEmitter<boolean>();

  sideNavOpen = true;

  constructor() { }

  ngOnInit() {
  }

  drawerClick() {
    this.sideNavOpen = !this.sideNavOpen;
    this.sideNavStateChanged.emit(this.sideNavOpen);
  }

}
