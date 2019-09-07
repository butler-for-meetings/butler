import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Project } from '../../models/project';
import { MatDialog } from '@angular/material';
import { AddDiscussionDialogComponent } from '../add-discussion-dialog/add-discussion-dialog.component';
import { ButlerApiService } from '../../services/butler-api.service';

@Component({
  selector: 'app-discussions-menu',
  templateUrl: './discussions-menu.component.html',
  styleUrls: ['./discussions-menu.component.scss']
})
export class DiscussionsMenuComponent implements OnInit {

  @Input() project: Project;
  @Output() menuTypeClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() discussionChosenClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialog: MatDialog, private butlerApiService: ButlerApiService) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDiscussionDialogComponent, {
      width: '30%',
      height: '70%',
      direction: 'rtl'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  updateMenuType(event) {
    this.menuTypeClick.emit({ menuType: 'project' });
  }

  discussionChosen(discussionIndex): void {
    this.butlerApiService.changeMessage(this.project, discussionIndex);
  }

}
