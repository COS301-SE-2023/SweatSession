import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExerciseExplorerPage } from './exercise-explorer.page';

describe('ExerciseExplorerPage', () => {
  let component: ExerciseExplorerPage;
  let fixture: ComponentFixture<ExerciseExplorerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExerciseExplorerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
