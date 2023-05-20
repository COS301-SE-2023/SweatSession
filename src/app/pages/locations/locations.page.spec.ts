import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationsPage } from './locations.page';

describe('LocationsPage', () => {
  let component: LocationsPage;
  let fixture: ComponentFixture<LocationsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LocationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
