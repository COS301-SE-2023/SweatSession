import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HealthDataDisplayPage } from './health-data-display.page';

describe('HealthDataDisplayPage', () => {
  let component: HealthDataDisplayPage;
  let fixture: ComponentFixture<HealthDataDisplayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HealthDataDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
