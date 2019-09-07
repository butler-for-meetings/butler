import { Component, OnInit, ViewChild } from '@angular/core';
import { ButlerApiService } from '../../services/butler-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  changeDrawerState(e) {
    // this.drawer.toggle();
  }

}
