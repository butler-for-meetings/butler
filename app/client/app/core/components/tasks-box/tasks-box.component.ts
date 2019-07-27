import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-tasks-box',
  templateUrl: './tasks-box.component.html',
  styleUrls: ['./tasks-box.component.scss']
})
export class TasksBoxComponent implements OnInit {
  @Input() tasks: Task[];
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
