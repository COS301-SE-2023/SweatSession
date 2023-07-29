import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {AlertController, IonicModule} from '@ionic/angular';
import { of } from 'rxjs';
import { PersonalBestsChartComponent } from './personal-bests-chart.component';
import { PersonalbestService } from 'src/app/services/personalbest/personalbest.service';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Import AngularFirestore
import { AngularFireModule } from '@angular/fire/compat'; // Import AngularFireModule
import { environment } from 'src/environments/environment';
import {IPersonalBest} from "../../../models"; // Assuming you have an environment.ts file

describe('PersonalBestsChartComponent', () => {
    let component: PersonalBestsChartComponent;
    let fixture: ComponentFixture<PersonalBestsChartComponent>;
    let personalbestService: PersonalbestService;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [PersonalBestsChartComponent],
                imports: [
                    IonicModule.forRoot(),
                    // Set up AngularFireModule with environment settings
                    AngularFireModule.initializeApp(environment.firebase),
                ],
                providers: [
                    PersonalbestService,
                    AngularFirestore, // Provide AngularFirestore
                    AlertController,
                ],
            }).compileComponents();

        })
    );

    it('should create the component', () => {
        fixture = TestBed.createComponent(PersonalBestsChartComponent);
        component = fixture.componentInstance;

        // console.log('Component:', component);

        expect(component).toBeTruthy();
    });

    it('should call retrieveExercisesByName with the selected exercise name when showChart is called', () => {
        const retrieveExercisesByNameSpy =spyOn(component, 'retrieveExercisesByName');

        component.showExercise = 'Bench Press';
        component.showChart();

        expect(retrieveExercisesByNameSpy).toHaveBeenCalledWith('Bench Press');
    });

    // it('should fetch data and set chartData, chartLabels, and chartOptions on ngOnInit', () => {
    //     const mockPersonalBestsData  = [
    //         { date: '2023-07-22', reps: 10 },
    //         { date: '2023-07-23', reps: 12 },
    //         { date: '2023-07-24', reps: 15 },
    //     ];
    //
    //     const getExercisesByNameSpy = jest.spyOn(personalbestService, 'getExercisesByName').mockReturnValue(mockPersonalBestsData as any);
    //
    //     fixture.detectChanges();
    //
    //     expect(getExercisesByNameSpy).toHaveBeenCalled();
    //     expect(component.personalBestsData).toEqual(mockPersonalBestsData);
    //     expect(component.chartData).toEqual([
    //         {
    //             data: [10, 12, 15],
    //             label: 'REPS',
    //         },
    //     ]);
    //     expect(component.chartLabels).toEqual(['2023-07-22', '2023-07-23', '2023-07-24']);
    //     expect(component.chartOptions).toEqual({
    //         responsive: true,
    //         scales: {
    //             y: {
    //                 beginAtZero: true,
    //             },
    //         },
    //     });
    // });
});



    //


    // Add more tests for the remaining methods and functionality of the component as needed

