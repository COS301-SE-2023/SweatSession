import { ComponentFixture, TestBed ,waitForAsync} from '@angular/core/testing';
import { UserprofilePage } from './userprofile.page';

describe('UserprofilePage', () => {
  let component: UserprofilePage;
  let fixture: ComponentFixture<UserprofilePage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(UserprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should work yet',() => {
    
    expect(true).toBeFalsy();
  });
});
