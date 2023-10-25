import { TestBed } from "@angular/core/testing";
import { Auth } from "@angular/fire/auth";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth } from "firebase/auth";
import { of } from "rxjs";
import {
    IAddGOAL,
    ITASK
} from '../models';
import { AuthApi } from "../states";
import { goalsRepository } from "./goals.repository";

describe('goalsRepository', () => {
    let repository: goalsRepository;
    let firestoreMock = {
        collection: jest.fn().mockReturnThis(),
        doc: jest.fn().mockReturnThis(),
        add: jest.fn().mockReturnValue(of({})),
        set: jest.fn().mockReturnValue(of({})),
        update: jest.fn().mockReturnValue(of({})),
        delete: jest.fn().mockReturnValue(of({})),

    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                goalsRepository,
                {provide: AngularFirestore, useValue: firestoreMock,},
                {provide: AuthApi, useValue: {},},
                {provide: Auth, useValue: {},},
                {provide: getAuth, useValue: {},},
                {provide: AngularFireModule, useValue: firestoreMock,},
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

            it('should mark task as done', async () => {
                const userId = 'testUserId';
                const goalId = 'testGoalId';
                const taskid = 'testTaskId';
                const request: ITASK = {
                    id: taskid,
                    content: 'testContent',
                    done : true,

                };

                const response = await repository.doneTask(userId, goalId, taskid,request);
                expect(firestoreMock.collection).toHaveBeenCalledWith('fitnessgoals');
                expect(firestoreMock.collection).toHaveBeenCalledWith('goals');
                expect(firestoreMock.collection).toHaveBeenCalledWith('Tasks');
                expect(firestoreMock.doc).toHaveBeenCalledWith(`${userId}`);
                expect(firestoreMock.doc).toHaveBeenCalledWith(`${goalId}`);
                expect(firestoreMock.doc).toHaveBeenCalledWith(`${taskid}`);
                expect(firestoreMock.set).toHaveBeenCalled();

            });



    });
});


