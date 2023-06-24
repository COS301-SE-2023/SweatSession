import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { FitnessgoalsPage } from './fitnessgoals.page';

describe('FitnessgoalsPage', () => {
  let component: FitnessgoalsPage;
  let fixture: ComponentFixture<FitnessgoalsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FitnessgoalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
