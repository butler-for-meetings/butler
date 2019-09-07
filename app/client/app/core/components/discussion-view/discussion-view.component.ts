import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Project } from '../../models/project';
import { Discussion } from '../../models/discussion';
import { Subscription } from 'rxjs';
import { ButlerApiService } from '../../services/butler-api.service';
import { MatDialog } from '@angular/material';
import { AddDiscussionDialogComponent } from '../add-discussion-dialog/add-discussion-dialog.component';
import { AddCommentDialogComponent } from '../add-comment-dialog/add-comment-dialog.component';

@Component({
  selector: 'app-discussion-view',
  templateUrl: './discussion-view.component.html',
  styleUrls: ['./discussion-view.component.scss']
})
export class DiscussionViewComponent implements OnInit, OnDestroy  {

  discussion: Discussion;
  project: Project;
  subscription: Subscription;

  ngOnInit() { 
    const self = this;
    this.subscription = this.butlerApiService.discussionMenuToView.subscribe(message => { 
      self.discussion = message.project.discussions[message.discussionIndex]; 
      self.project = message.project;
    });
  }

  constructor(private butlerApiService: ButlerApiService, public dialog: MatDialog,) {
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  movePreviousDiscussion() {
    const previousDiscussion = this.project.discussions.find( discussion => discussion.title === this.discussion.previousDiscussionId);
    const previousDiscussionIndex = this.project.discussions.indexOf(previousDiscussion);

    if (previousDiscussion) {
      this.discussion = previousDiscussion;
      this.butlerApiService.discussionViewToMenu.next(previousDiscussionIndex);
    }
  }

  moveNextDiscussion() {
    const nextDiscussion = this.project.discussions.find( discussion => discussion.previousDiscussionId === this.discussion.title);
    const nextDiscussionIndex = this.project.discussions.indexOf(nextDiscussion);

    if (nextDiscussion) {
      this.discussion = nextDiscussion;
      this.butlerApiService.discussionViewToMenu.next(nextDiscussionIndex);
    }
  }

  openDialogComment(): void {
    const dialogRef = this.dialog.open(AddCommentDialogComponent, {
      width: '20%',
      height: '25%',
      direction: 'rtl'
    });

    dialogRef.afterClosed().subscribe(comment => {
      this.discussion.comments.push(comment);
    });
  }

  openDialogDiscussion(): void {
    const dialogRef = this.dialog.open(AddDiscussionDialogComponent, {
      width: '30%',
      height: '70%',
      direction: 'rtl',
      data: {project: this.project, discussion: this.discussion}
    });

    dialogRef.afterClosed().subscribe(discussion => {
      this.discussion = discussion;
    });
  }
}
