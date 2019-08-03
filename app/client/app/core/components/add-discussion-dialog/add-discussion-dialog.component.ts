import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { Discussion } from '../../models/discussion';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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

  discussionForm: FormGroup;
  minDate = new Date();

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddDiscussionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Discussion) {}
  
  ngOnInit() {
    if (this.data) {
      this.discussionForm = this.fb.group({
        title: [this.data.title, [Validators.required]],
      });

    } else {
      this.discussionForm = this.fb.group({
        title: ['', [Validators.required]],
        date: [new Date(), [Validators.required]],
        purpose: ['', [Validators.required]],
        host: ['', [Validators.required]],
        participants: [[],[]],
        tags: [[],[]],
        background: ['', [Validators.required]],
        mainPoints: ['',[Validators.required]],
        mainPointsSum: ['',[Validators.required]],
        priorTasks: [[],[]],
        continueTasks: [[],[]],
        comments: [[],[]],
        previousDiscussionId: ['', []],
      });
    }

  }

  exit(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.discussionForm.value);
  }

}
