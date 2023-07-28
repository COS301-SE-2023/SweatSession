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
        set: jest.fn().mockReturnValue(of({}),),
        // set: jest.fn().mockReturnThis(
        //     {
        //         then: jest.fn().mockReturnThis(),
        //         catch: jest.fn().mockReturnThis(),
        //     }
        // ),
        update: jest.fn().mockReturnValue(of({})),
        delete: jest.fn().mockReturnValue(of({})),
        then: jest.fn().mockReturnThis(),

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

            it('should save Tasks', async () => {
                const userId = 'testUserId';
                const goalId = 'testGoalId';
                const request: ITASK[] =
                    [
                        {
                            id: 'testTaskId',
                            content: 'testContent',
                            done : false,
                        },
                        {
                            id: 'testTaskId2',
                            content: 'testContent2',
                            done : false,
                        }
                    ]

                const response = await repository.saveTasks(userId, goalId, request);
                expect(firestoreMock.collection).toHaveBeenCalledWith('fitnessgoals');
                expect(firestoreMock.collection).toHaveBeenCalledWith('goals');
                expect(firestoreMock.collection).toHaveBeenCalledWith('Tasks');
                expect(firestoreMock.doc).toHaveBeenCalledWith(`${userId}`);
                expect(firestoreMock.doc).toHaveBeenCalledWith(`${goalId}`);
                expect(firestoreMock.doc).toHaveBeenCalledWith(`${request[0].id}`);
                expect(firestoreMock.doc).toHaveBeenCalledWith(`${request[1].id}`);
                expect(firestoreMock.set).toHaveBeenCalled();


            });

    });
});


