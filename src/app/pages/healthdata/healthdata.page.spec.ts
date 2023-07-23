import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HealthDataPage } from './healthdata.page';

describe('HealthDataPage', () => {
  let component: HealthDataPage;
  let fixture: ComponentFixture<HealthDataPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(HealthDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
