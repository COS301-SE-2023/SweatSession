import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { OtheruserPage } from './otheruser.page';

describe('OtheruserPage', () => {
  let component: OtheruserPage;
  let fixture: ComponentFixture<OtheruserPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(OtheruserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
