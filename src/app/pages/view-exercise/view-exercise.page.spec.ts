import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewExercisePage } from './view-exercise.page';

describe('ViewExercisePage', () => {
  let component: ViewExercisePage;
  let fixture: ComponentFixture<ViewExercisePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewExercisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
