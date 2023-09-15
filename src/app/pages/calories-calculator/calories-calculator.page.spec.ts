import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaloriesCalculatorPage } from './calories-calculator.page';

describe('CaloriesCalculatorPage', () => {
  let component: CaloriesCalculatorPage;
  let fixture: ComponentFixture<CaloriesCalculatorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaloriesCalculatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
