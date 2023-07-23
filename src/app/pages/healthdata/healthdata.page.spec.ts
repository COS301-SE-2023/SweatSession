import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HealthdataPage } from './healthdata.page';

describe('HealthdataPage', () => {
  let component: HealthdataPage;
  let fixture: ComponentFixture<HealthdataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HealthdataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
