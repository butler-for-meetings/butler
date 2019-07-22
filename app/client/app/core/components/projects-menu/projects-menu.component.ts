import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects-menu',
  templateUrl: './projects-menu.component.html',
  styleUrls: ['./projects-menu.component.scss']
})
export class ProjectsMenuComponent implements OnInit {

  @Input() projects: Project[];

  constructor() { }

  ngOnInit() {
  }

}
