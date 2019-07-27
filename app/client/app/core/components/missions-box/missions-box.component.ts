import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-missions-box',
  templateUrl: './missions-box.component.html',
  styleUrls: ['./missions-box.component.scss']
})
export class MissionsBoxComponent implements OnInit {
  @Input() missions: object[];
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
