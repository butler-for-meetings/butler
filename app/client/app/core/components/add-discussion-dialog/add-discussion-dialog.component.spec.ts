import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiscussionDialogComponent } from './add-discussion-dialog.component';

describe('DescriptionBoxComponent', () => {
  let component: AddDiscussionDialogComponent;
  let fixture: ComponentFixture<AddDiscussionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDiscussionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiscussionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
