import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderAssignmentComponent } from './form-builder-assignment.component';

describe('FormBuilderAssignmentComponent', () => {
  let component: FormBuilderAssignmentComponent;
  let fixture: ComponentFixture<FormBuilderAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuilderAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
