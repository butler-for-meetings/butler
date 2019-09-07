import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects-menu',
  templateUrl: './projects-menu.component.html',
  styleUrls: ['./projects-menu.component.scss']
})
export class ProjectsMenuComponent implements OnInit {

  @Input() projects: Project[];
  @Output() menuTypeClick: EventEmitter<any> = new EventEmitter<any>(); 
  constructor() { }

  ngOnInit() {
  }

  updateMenuType(event, projectIndex){
    this.menuTypeClick.emit({menuType: 'discussion', projectIndex});
  }


}
