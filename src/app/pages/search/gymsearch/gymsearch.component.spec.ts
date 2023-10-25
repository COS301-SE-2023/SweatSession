import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule } from '@ionic/angular';
import { NgxsModule } from '@ngxs/store';
import { LocationRepository } from 'src/app/repository/location.repository';
import { GymsearchComponent } from './gymsearch.component';
// import { AngularFireModule } from '@angular/fire';
import { NgFor, NgIf } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';
import { FriendsRepository } from 'src/app/repository';
import { AuthApi } from 'src/app/states';
@NgModule({
  declarations: [GymsearchComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonicModule,
    // AngularFireModule.initializeApp(firebaseConfig),  
    AngularFirestoreModule,
    // AngularFirestore
  ]
})
class TestModule {}  

describe('GymsearchComponent', () => {
  let component: GymsearchComponent;
  let fixture: ComponentFixture<GymsearchComponent>;
  let friendsRepositorySpy: any;

  // Stub data
const mockFriends = [
  { userId: 'user1' },
  { userId: 'user2' }
];

// Mock repository 
const friendsRepositoryStub = {
  getUserFriends: () => of(mockFriends) 
};
  beforeEach(waitForAsync(() => {
    // const friendsRepositoryStub = {
    //   getUserFriends: () => of([
    //     { userId: 'user1' },
    //     { userId: 'user2' }   
    //   ])  
    // };
    // friendsRepositorySpy = jest.spyOn(friendsRepositoryStub, 'getUserFriends').mockReturnValue(
    //   of([
    //     { userId: 'user1' },  
    //     { userId: 'user2' }    
    //   ])  
    // );
    TestBed.configureTestingModule({
      declarations: [GymsearchComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Geolocation, useValue: {} }, // Provide mock
        { provide: HttpClient, useValue: {} }, // Provide mock
        { provide: LocationRepository, useValue: {} },
        { provide: AuthApi, useValue: {} },
        { provide: DatePipe, useValue: {} },
        { provide: AngularFirestore, useValue: {} },
        { provide: IonicModule, useValue: {} },
        // { provide: FriendsRepository, useValue: friendsRepositorySpy },
        { provide: FriendsRepository, useValue: friendsRepositoryStub }
      ],
      imports: [
        IonicModule.forRoot(),
        NgxsModule.forRoot(), // Add StoreModule import
        TestModule, 
        NgIf, 
        NgFor
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GymsearchComponent);
    component = fixture.componentInstance;
  //   component.userFriends = [];
  //  const friends = friendsRepositorySpy();
  // component.userFriends = friends;
    fixture.detectChanges();
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(GymsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
    expect(friendsRepositorySpy).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });
});
