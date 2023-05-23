import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LocationsPage } from './locations.page';

describe('LocationsPage', () => {
  let component: LocationsPage;
  let fixture: ComponentFixture<LocationsPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(LocationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should work yet',() => {
    
    expect(false).toBeFalsy();
  });
});
