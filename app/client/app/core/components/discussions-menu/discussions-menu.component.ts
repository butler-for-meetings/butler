import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Project } from '../../models/project';
import { MatDialog } from '@angular/material';
import { AddDiscussionDialogComponent } from '../add-discussion-dialog/add-discussion-dialog.component';
import { ButlerApiService } from '../../services/butler-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-discussions-menu',
  templateUrl: './discussions-menu.component.html',
  styleUrls: ['./discussions-menu.component.scss']
})
export class DiscussionsMenuComponent implements OnInit {

  @Input() project: Project;
  @Output() menuTypeClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateProjectClick: EventEmitter<any> = new EventEmitter<any>();
  chosenDiscussionIndex: Number;
  subscription: Subscription;

  constructor(public dialog: MatDialog, private butlerApiService: ButlerApiService) { }

  ngOnInit() {
    const self = this;
    this.subscription = this.butlerApiService.discussionViewToMenu.subscribe(message => { 
      self.chosenDiscussionIndex = message; 
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDiscussionDialogComponent, {
      width: '30%',
      height: '70%',
      direction: 'rtl',
      data: {project: this.project}
    });

    dialogRef.afterClosed().subscribe(project => {
      this.updateProjectClick.emit({ project });
    });
  }

  updateMenuType(event) {
    this.menuTypeClick.emit({ menuType: 'project' });
  }

  discussionChosen(discussionIndex): void {
    this.chosenDiscussionIndex = discussionIndex;
    this.butlerApiService.discussionMenuToView.next({project: this.project, discussionIndex});
  }

  filterBy(prop: string) {
    return this.project.discussions.sort((a, b) => a[prop] < b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

}
