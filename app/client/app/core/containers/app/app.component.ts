import { Component } from '@angular/core';
import mimic from 'mimic';
import * as mocks from './mocks.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    this.addMockData();
  }

  addMockData() {
    mimic.import(JSON.stringify((mocks as any).default));
  }
}
