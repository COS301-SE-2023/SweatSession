import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SetprofilePage } from './setprofile.page';

describe('SetprofilePage', () => {
  let component: SetprofilePage;
  let fixture: ComponentFixture<SetprofilePage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(SetprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
