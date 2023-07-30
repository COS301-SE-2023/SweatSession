import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateGroupComponent } from './create-group.component';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { IGroup } from 'src/app/models';
import { By } from '@angular/platform-browser';
import { AddChatGroup } from 'src/app/actions';
import { IonicModule } from '@ionic/angular';
import { BackButtonDirectiveModule } from 'src/app/directives';

describe('CreateGroupComponent', () => {
  let component: CreateGroupComponent;
  let fixture: ComponentFixture<CreateGroupComponent>;
  let storeMock: Partial<Store>;

  beforeEach(async () => {
    storeMock = {
      dispatch: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [IonicModule,  BackButtonDirectiveModule,],
      declarations: [CreateGroupComponent],
      providers: [{ provide: Store, useValue: storeMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGroupComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize group with an empty string for profileURL', () => {
    expect(component.group).toEqual({});
  });

  it('should call convertToBase64 with the selected file when onFileSelected is called', () => {
    const file = new File(['Test data'], 'test.png', { type: 'image/png' });
    const event = { target: { files: [file] } };

    component.convertToBase64 = jest.fn(); // Mocking the convertToBase64 method

    component.onFileSelected(event);

    expect(component.convertToBase64).toHaveBeenCalledTimes(1);
    expect(component.convertToBase64).toHaveBeenCalledWith(file);
  });

  it('should dispatch AddChatGroup action when createGroup is called', () => {
    const group: IGroup = { displayName: 'Test Group', profileURL: '' };
    component.group = group;

    component.createGroup();

    expect(storeMock.dispatch).toHaveBeenCalledTimes(1);
    expect(storeMock.dispatch).toHaveBeenCalledWith(new AddChatGroup(group));
  });

});
