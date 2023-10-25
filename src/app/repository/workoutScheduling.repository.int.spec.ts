import { TestBed } from '@angular/core/testing';
import { AngularFirestore, CollectionReference, DocumentReference } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';
import { WorkoutscheduleRepository } from './workoutSchedule.repository';
import {
  IAddWorkoutSchedule,
  IUpdateWorkoutSchedule,
  IGetWorkoutSchedules,
  IRemoveWorkoutSchedule,
  IGotWorkoutSchedules,
  IAddedWorkoutSchedule,
  IRemovedWorkoutSchedule,
  IUpdatedWorkoutSchedule,
  IWorkoutScheduleModel,
} from '../models';
import { Timestamp } from 'firebase/firestore';

describe('WorkoutscheduleRepository', () => {
  let repository: WorkoutscheduleRepository;
  let firestoreMock =  {
    collection: jest.fn().mockReturnThis(),
    doc: jest.fn().mockReturnThis(),
    snapshotChanges: jest.fn(() => of([])),
    delete: jest.fn().mockResolvedValueOnce({}),
    update: jest.fn().mockReturnValue(of({})),
    add: jest.fn().mockReturnValue(of({})
    )
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WorkoutscheduleRepository,
        { provide: AngularFirestore, useValue: firestoreMock },
      ],
    });

    repository = TestBed.inject(WorkoutscheduleRepository);
  });

  describe('removeSchedule', () => {
    it('should remove a schedule and return the response', async () => {
      const userId = 'testUserId';
      const scheduleId = 'testScheduleId';
     
     
      const request: IRemoveWorkoutSchedule = {
        userId: userId,
        schedule: { id: scheduleId },
      };
  
      const response = await repository.removeSchedule(request);
  
      expect(response.userId).toEqual(userId);
      expect(response.validate).toBeTruthy();
      expect(firestoreMock.collection).toHaveBeenCalledWith('WorkoutSchedule');
      expect(firestoreMock.collection).toHaveBeenCalledWith('userSchedules');
      expect(firestoreMock.doc).toHaveBeenCalledWith(`${userId}`);
      expect(firestoreMock.doc).toHaveBeenCalledWith(`${scheduleId}`);
      // expect(firestoreMock.delete).toHaveBeenCalled();
    });
  });
  


  describe('updateSchedule', () => {
    it('should update a schedule and return the response', async () => {
      const scheduleId = 'schedule-id';
      const updatedData:IWorkoutScheduleModel = {id:scheduleId};
      const request: IUpdateWorkoutSchedule = {
        userId: scheduleId,
        schedule:updatedData
      }

      const response:IUpdatedWorkoutSchedule = {
        userId: request.userId,
        validate: true,
      }
    // Act
    const result = await repository.updateSchedule(request);

    // Assert
    expect(result.validate).toBeTruthy();
    expect(firestoreMock.collection).toHaveBeenCalledWith('WorkoutSchedule');
    expect(firestoreMock.collection).toHaveBeenCalledWith('userSchedules');
    expect(firestoreMock.doc).toHaveBeenCalledWith(`${scheduleId}`);
    expect(firestoreMock.update).toHaveBeenCalledWith(updatedData);
    });
  });

  // describe('getSchedules', () => {
  //   it('should retrieve schedules for a user', (done) => {
  //     const userId = 'testUserId';
  //     const request:IGetWorkoutSchedules ={
  //       userId: userId
  //     }
      
  //     repository.getSchedules(request).subscribe((schedules) => {
  //       expect(schedules).toEqual([]);
  //       expect(firestoreMock.collection).toHaveBeenCalledWith(`WorkoutSchedule/${request.userId}/userSchedules`);
  //       expect(firestoreMock.snapshotChanges).toHaveBeenCalled();
  //       done();
  //     });
  //   });
  // });
});
