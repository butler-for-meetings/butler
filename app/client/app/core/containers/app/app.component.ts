import { Component, ViewEncapsulation } from '@angular/core';
import mimic from 'mimic';
import * as mocks from './mocks.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor() {
    this.addMockData();
  }

  addMockData() {
    mimic.import(JSON.stringify((mocks as any).default));
  }
}
