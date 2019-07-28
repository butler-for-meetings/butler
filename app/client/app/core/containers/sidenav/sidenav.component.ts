import { Component, OnInit } from '@angular/core';
import { ButlerApiService } from '../../services/butler-api.service';
import { Project } from '../../models/project';
import { MatDialog } from '@angular/material';
import { AddDiscussionDialogComponent } from '../../components/add-discussion-dialog/add-discussion-dialog.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private _butlerApiService: ButlerApiService, public dialog: MatDialog) { }

  public projects: Project[];
  public menuTypes = {
    PROJECT: 'project',
    DISCUSSION: 'discussion'
  };

  public menuType = this.menuTypes.PROJECT;

   async ngOnInit() {
    const result = await this._butlerApiService.getAllProjects();
    this.projects = result;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDiscussionDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
