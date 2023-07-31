import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatComponent } from './chat.component';
import { IonicModule, NavController } from '@ionic/angular';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  let navMock: Partial<NavController>;

  beforeEach(async () => {
    navMock = {
      navigateRoot: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [ChatComponent],
      imports: [ IonicModule],
      providers: [{ provide: NavController, useValue: navMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return formatted time', () => {
    const formattedTime = component.toDate();
    expect(formattedTime).toBe('11:00 AM');
  });

  it('should navigate to chatroom on openChat method call', () => {
    component.openChat();
    expect(navMock.navigateRoot).toHaveBeenCalledWith('/chatroom');
  });
});
