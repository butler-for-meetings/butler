import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Discussion } from '../../models/discussion';

@Component({
  selector: 'app-add-discussion-dialog',
  templateUrl: './add-discussion-dialog.component.html',
  styleUrls: ['./add-discussion-dialog.component.scss']
})
export class AddDiscussionDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddDiscussionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Discussion) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
