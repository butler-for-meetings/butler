import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionBoxComponent } from './missions-box.component';

describe('MissionsBoxComponent', () => {
  let component: MissionsBoxComponent;
  let fixture: ComponentFixture<MissionsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
