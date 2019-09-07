import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommetDialogComponent } from './add-comment-dialog.component';

describe('DescriptionBoxComponent', () => {
  let component: AddCommetDialogComponent;
  let fixture: ComponentFixture<AddCommetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCommetDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
