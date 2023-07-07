import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPersonalbestsPage } from './view-personalbests.page';

describe('ViewPersonalbestsPage', () => {
  let component: ViewPersonalbestsPage;
  let fixture: ComponentFixture<ViewPersonalbestsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewPersonalbestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
