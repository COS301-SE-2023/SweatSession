import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoalviewPage } from './goalview.page';

describe('GoalviewPage', () => {
  let component: GoalviewPage;
  let fixture: ComponentFixture<GoalviewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GoalviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
