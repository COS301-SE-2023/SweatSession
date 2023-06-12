import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PointsPage } from './points.page';

describe('PointsPage', () => {
  let component: PointsPage;
  let fixture: ComponentFixture<PointsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
