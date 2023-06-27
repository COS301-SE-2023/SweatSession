import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FitnessgoalViewPage } from './fitnessgoal-view.page';

describe('FitnessgoalViewPage', () => {
  let component: FitnessgoalViewPage;
  let fixture: ComponentFixture<FitnessgoalViewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FitnessgoalViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
