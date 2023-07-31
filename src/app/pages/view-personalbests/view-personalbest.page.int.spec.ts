// import { TestBed, ComponentFixture } from '@angular/core/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { IonicModule, ModalController } from '@ionic/angular';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { ViewPersonalbestsPage } from './view-personalbests.page';
// import { PersonalbestService } from 'src/app/services/personalbest/personalbest.service';
// import { BackButtonDirectiveModule } from 'src/app/directives';
// import { AddPersonalBestComponent } from './add-personal-best/add-personal-best.component';

// describe('ViewPersonalbestsPage', () => {
//     let component: ViewPersonalbestsPage;
//     let fixture: ComponentFixture<ViewPersonalbestsPage>;
//     let personalbestService: PersonalbestService;
//     let angularFirestore: AngularFirestore;

//     beforeEach(async () => {
//         await TestBed.configureTestingModule({
//             declarations: [ViewPersonalbestsPage, AddPersonalBestComponent,],
//             imports: [ReactiveFormsModule, IonicModule,  BackButtonDirectiveModule],
//             providers: [
//                 { provide: ModalController, useValue: {} },
//                 { provide: AngularFirestore, useValue: {} },
//                 { provide: PersonalbestService, useClass: PersonalbestService }
//             ]
//         }).compileComponents();
//     });

//     beforeEach(() => {
//         fixture = TestBed.createComponent(ViewPersonalbestsPage);
//         component = fixture.componentInstance;
//         personalbestService = TestBed.inject(PersonalbestService);
//         angularFirestore = TestBed.inject(AngularFirestore);
//         fixture.detectChanges();
//     });

//     it('should add a new personal best entry when onSubmit is called', () => {
//         // Mock form data
//         component.ngOnInit();
//         fixture.detectChanges();

//         const createIdMock = jest.fn(() => '1234');
//         jest.spyOn(angularFirestore, 'createId').mockImplementation(createIdMock);

//         const formData = {
//             date: '2022-01-01',
//             exercise: 'Squats',
//             location: 'Gym',
//             notes: 'Good workout',
//             reps: 8,
//             weight: 100
//         };

//         // Spy on the addPersonalbest method
//         jest.spyOn(personalbestService, 'addPersonalbest');

//         // Set form data and call onSubmit
//         component.PersonalBestForm.setValue(formData);
//         component.onSubmit();

//         // Expect addPersonalbest to be called with the correct data
//         expect(personalbestService.addPersonalbest).toHaveBeenCalledWith({
//             //expect id to have a string value,
//             exercise: formData.exercise,
//             weight: formData.weight,
//             reps: formData.reps,
//             location: formData.location,
//             date: formData.date.split('T')[0],
//             notes: formData.notes
//         });
//     });

// });

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';
import { ViewPersonalbestsPage } from './view-personalbests.page';
import { PersonalbestService } from 'src/app/services/personalbest/personalbest.service';

describe('ViewPersonalbestsPage', () => {
  let component: ViewPersonalbestsPage;
  let fixture: ComponentFixture<ViewPersonalbestsPage>;
  let personalbestServiceStub: Partial<PersonalbestService>;
  let firestoreStub: Partial<AngularFirestore>;

  beforeEach(
    waitForAsync(() => {
      personalbestServiceStub = {
        addPersonalbest: jest.fn(),
      };

      firestoreStub = {
        createId: jest.fn(),
      };

      TestBed.configureTestingModule({
        declarations: [ViewPersonalbestsPage],
        imports: [IonicModule.forRoot(), ReactiveFormsModule],
        providers: [
          { provide: PersonalbestService, useValue: personalbestServiceStub },
          { provide: AngularFirestore, useValue: firestoreStub },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(ViewPersonalbestsPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form and subscriptions', () => {
    expect(component.PersonalBestForm).toBeDefined();

    component.PersonalBestForm.setValue({
      exercise: 'Bench Press',
      weight: 100,
      reps: 5,
      date: '2023-07-31',
      location: 'Gym',
      notes: 'Heavy lifting',
    });

    // Test isValid function
    expect(component.isValid(component.PersonalBestForm.value)).toBe(true);

    // Test onSubmit function
    const addPersonalbestSpy = jest.spyOn(personalbestServiceStub, 'addPersonalbest');
    component.onSubmit();
    expect(addPersonalbestSpy).toHaveBeenCalled();
    expect(component.showForm).toBe(false);
    expect(component.PersonalBestForm.value).toEqual({
      exercise: null,
      weight: null,
      reps: null,
      date: null,
      location: null,
      notes: null,
    });
  });

  it('should get today date', () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentDay = currentDate.getDate().toString().padStart(2, '0');
    const expectedDate = `${currentYear}-${currentMonth}-${currentDay}`;

    expect(component.getTodayDate()).toBe(expectedDate);
  });
});

