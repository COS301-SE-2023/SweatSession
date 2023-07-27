import {TestBed}  from "@angular/core/testing";
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {of} from "rxjs";
import {goalsRepository} from "./goals.repository";
import {
    IGOAL,
    IAddedGoal,
    IAddGOAL,
    IGotGOAL,
    ITASK,
} from '../models';
import {Auth} from "@angular/fire/auth";
import {AuthApi} from "../states";
import {AngularFireModule} from "@angular/fire/compat";
import {getAuth} from "firebase/auth";

describe('goalsRepository', () => {
    let repository: goalsRepository;
    let firestoreMock = {
        collection: jest.fn().mockReturnThis(),
        doc: jest.fn().mockReturnThis(),
        add: jest.fn().mockReturnValue(of({})),
        set: jest.fn().mockReturnValue(of({}))
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                goalsRepository,
                {provide: AngularFirestore, useValue: firestoreMock,},
                {provide: AuthApi, useValue: {},},
                {provide: Auth, useValue: {},},
                {provide: getAuth, useValue: {},},
                {provide: AngularFireModule, useValue: {},},
            ],
        });

        repository = TestBed.inject(goalsRepository);
    });

    describe('Adding goals', () => {

            it('should add a goal', async () => {
                const userId = 'testUserId';
                const goalId = 'testGoalId';
                const request: IAddGOAL = {
                    userId: userId,
                    goal: {id: goalId},
                };

                const response = await repository.addGoal(request);
                expect(firestoreMock.collection).toHaveBeenCalledWith('fitnessgoals');
                expect(firestoreMock.collection).toHaveBeenCalledWith('goals');
                expect(firestoreMock.doc).toHaveBeenCalledWith(`${userId}`);
                expect(firestoreMock.doc).toHaveBeenCalledWith(`${goalId}`);
                expect(firestoreMock.set).toHaveBeenCalled();

            });


    });
});


