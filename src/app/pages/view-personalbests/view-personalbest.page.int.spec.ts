import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ViewPersonalbestsPage } from './view-personalbests.page';
import { PersonalbestService } from 'src/app/services/personalbest/personalbest.service';

describe('ViewPersonalbestsPage', () => {
    let component: ViewPersonalbestsPage;
    let fixture: ComponentFixture<ViewPersonalbestsPage>;
    let personalbestService: PersonalbestService;
    let angularFirestore: AngularFirestore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ViewPersonalbestsPage],
            imports: [ReactiveFormsModule, IonicModule],
            providers: [
                { provide: ModalController, useValue: {} },
                { provide: AngularFirestore, useValue: {} },
                { provide: PersonalbestService, useClass: PersonalbestService }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewPersonalbestsPage);
        component = fixture.componentInstance;
        personalbestService = TestBed.inject(PersonalbestService);
        angularFirestore = TestBed.inject(AngularFirestore);
        fixture.detectChanges();
    });

    it('should add a new personal best entry when onSubmit is called', () => {
        // Mock form data
        component.ngOnInit();
        fixture.detectChanges();

        const createIdMock = jest.fn(() => '1234');
        jest.spyOn(angularFirestore, 'createId').mockImplementation(createIdMock);

        const formData = {
            date: '2022-01-01',
            exercise: 'Squats',
            location: 'Gym',
            notes: 'Good workout',
            reps: 8,
            weight: 100
        };

        // Spy on the addPersonalbest method
        jest.spyOn(personalbestService, 'addPersonalbest');

        // Set form data and call onSubmit
        component.PersonalBestForm.setValue(formData);
        component.onSubmit();

        // Expect addPersonalbest to be called with the correct data
        expect(personalbestService.addPersonalbest).toHaveBeenCalledWith({
            //expect id to have a string value,
            exercise: formData.exercise,
            weight: formData.weight,
            reps: formData.reps,
            location: formData.location,
            date: formData.date.split('T')[0],
            notes: formData.notes
        });
    });

});
