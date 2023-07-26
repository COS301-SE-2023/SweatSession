import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { NgxsModule, Store } from '@ngxs/store';
import { GymsearchComponent } from './gymsearch.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { LocationRepository } from 'src/app/repository/location.repository';
// import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthApi } from 'src/app/states';
import { FriendsRepository } from 'src/app/repository';
import { NgIf, NgFor } from '@angular/common';
import { of } from 'rxjs';
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
