import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, MatChipInputEvent } from '@angular/material';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { Comment } from '../../models/comment';


@Component({
  selector: 'app-add-comment-dialog',
  templateUrl: './add-comment-dialog.component.html',
  styleUrls: ['./add-comment-dialog.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'he'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class AddCommentDialogComponent implements OnInit {

  comment: Comment;

  constructor(public dialogRef: MatDialogRef<AddCommentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Comment) { }

  ngOnInit() {
    if (this.data) {
      this.comment = this.data;
    } else {
      this.comment = {
        author: '',
        content: ''
      };
    }
  }

  exit(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.comment);
  }

}
