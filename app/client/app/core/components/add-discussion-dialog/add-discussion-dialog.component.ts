import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, MatChipInputEvent } from '@angular/material';
import { Discussion } from '../../models/discussion';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Task } from '../../models/task';
import { DiscussionEditComponent } from '../discussion-edit/discussion-edit.component';
import { Project } from '../../models/project';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface DialogData {
  project: Project;
  discussion: Discussion;
}

@Component({
  selector: 'app-add-discussion-dialog',
  templateUrl: './add-discussion-dialog.component.html',
  styleUrls: ['./add-discussion-dialog.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'he'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class AddDiscussionDialogComponent implements OnInit {

  discussionObj: Discussion;
  minDate = new Date();
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: string[];
  participants: string[];
  priorTasks: Task[];
  continueTasks: Task[];
  priorTaskObj: Task;
  continueTaskObj: Task;
  commentObj: Comment;
  options: string[];
  autoControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddDiscussionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  
  ngOnInit() {
    this.priorTaskObj = { summary: '', startDate: new Date(), endDate: new Date(), responsible: '', jiraLink: '', finished: false };
    this.continueTaskObj = { summary: '', startDate: new Date(), endDate: new Date(), responsible: '', jiraLink: '', finished: false };
    this.commentObj = { author: '', content: '' };    
    this.options = this.data.project.discussions.map( discussion => discussion.title);
    this.filteredOptions = this.autoControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    if (this.data.discussion) {
      this.discussionObj = this.data.discussion;
      this.tags = this.discussionObj.tags;
      this.participants = this.discussionObj.participants;
      this.priorTasks = this.discussionObj.priorTasks;
      this.continueTasks = this.discussionObj.continueTasks;
      this.autoControl.setValue(this.discussionObj.previousDiscussionId);
    } else {
      this.discussionObj = {
        title: '', 
        date: new Date(),
        purpose: '', 
        host: '', 
        participants: [],
        tags: [],
        background: '', 
        mainPoints: '',
        mainPointsSum: '',
        priorTasks: [],
        continueTasks: [],
        comments: [],
        previousDiscussionId: ''
      };
      this.tags = [];
      this.participants = [];
      this.priorTasks = [];
      this.continueTasks = [];
    }
  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
  
  addParticipant(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.participants.push(value.trim());
    }

    if (input) {
      input.value = '';
    }
  }

  removeParticipant(participant: string): void {
    const index = this.participants.indexOf(participant);

    if (index >= 0) {
      this.participants.splice(index, 1);
    }
  }

  addPriorTask(event) {
    this.priorTaskObj.finished = false;
    this.priorTasks.push(this.priorTaskObj);
    this.priorTaskObj = {summary: '', startDate: new Date(), endDate: new Date(), responsible: '', jiraLink: '', finished: false};
    event.preventDefault();
  }

  deletePriorTask(task: Task) {
    const index = this.priorTasks.indexOf(task);

    if (index >= 0) {
      this.priorTasks.splice(index, 1);
    }
  }

  addContinueTask(event) {
    this.continueTasks.push(this.continueTaskObj);
    this.continueTaskObj = {summary: '', startDate: new Date(), endDate: new Date(), responsible: '', jiraLink: '', finished: false};
    event.preventDefault();
  }

  deleteContinueTask(task: Task) {
    const index = this.continueTasks.indexOf(task);

    if (index >= 0) {
      this.continueTasks.splice(index, 1);
    }
  }

  addComment(event) {
    this.discussionObj.comments.push(this.commentObj);
    this.commentObj = {content: '', author: '', };
    event.preventDefault();
  }

  deleteComment(comment: Comment) {
    const index = this.discussionObj.comments.indexOf(comment);

    if (index >= 0) {
      this.discussionObj.comments.splice(index, 1);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  exit(): void {
    this.dialogRef.close();
  }

  save() {
    this.discussionObj.tags = this.tags;
    this.discussionObj.participants = this.participants;
    this.discussionObj.priorTasks = this.priorTasks;
    this.discussionObj.continueTasks = this.continueTasks;
    this.discussionObj.previousDiscussionId = this.autoControl.value;
    
    if (this.data.discussion){
      this.data.discussion = this.discussionObj;
      this.dialogRef.close(this.data.discussion);
    } else {
      this.data.project.discussions.push(this.discussionObj);
      this.dialogRef.close(this.data.project);
    }
    
  }

}
