import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { WorkoutscheduleService } from './workoutschedule.service';
import { WorkoutscheduleRepository } from '../../repository';
import { InjectionToken } from '@angular/core';

describe('WorkoutscheduleService', () => {
  let service: WorkoutscheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WorkoutscheduleRepository,
        WorkoutscheduleService,
        AngularFirestore,
        {
          provide: new InjectionToken('angularfire2.app.options'),
          useValue: {},
        },
      ],
    });
    service = TestBed.inject(WorkoutscheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Add your test cases here
});




// import { IAddedWorkoutSchedule, IWorkoutScheduleModel } from './../../models/workoutSchedule.model';
// import { TestBed } from '@angular/core/testing';
// import { WorkoutscheduleService } from './workoutschedule.service';
// import { WorkoutscheduleRepository } from '../../repository';
// import { IAddWorkoutSchedule, IGetWorkoutSchedules, IRemoveWorkoutSchedule, IUpdateWorkoutSchedule } from 'src/app/models';
// import { Timestamp } from 'firebase/firestore';

// describe('WorkoutscheduleService', () => {
//   let service: WorkoutscheduleService;
//   let repository: WorkoutscheduleRepository;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [WorkoutscheduleRepository, WorkoutscheduleService]
//     });
//     service = TestBed.inject(WorkoutscheduleService);
//     repository = TestBed.inject(WorkoutscheduleRepository);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   it('should call repository.addSchedule with the correct request', async () => {
//     const payload:IWorkoutScheduleModel = {
//       id: 'test id',
//       name: 'test',
//       location: 'hatfield, test',
//       duration: 30,
//       status: 'uncompleted',
//       time: {minutes:30, hours:10},
//       date: new Date(),
//       createdAt: Timestamp.now(),
//       notifyAt:  Timestamp.now(),
//       notified: false,
//       completeAt: Timestamp.now(),
//       workoutAdded: false,
//       joined: false,
//     }
//     const request: IAddWorkoutSchedule = {
//       userId: "test id",
//       schedule: payload
//     };

//     const response: IAddedWorkoutSchedule ={
//       userId: "test id",
//       schedule: payload,
//       validate: true
//   }

//     jest.spyOn(repository, 'addSchedule').mockResolvedValue(response);

//     await service.addSchedule(request);

//     expect(repository.addSchedule).toHaveBeenCalledWith(request);
//   });

  // it('should call repository.removeSchedule with the correct request', async () => {
  //   const request: IRemoveWorkoutSchedule = /* create your request object */;
  //   jest.spyOn(repository, 'removeSchedule').mockResolvedValue(/* your mock response */);

  //   await service.removeSchedule(request);

  //   expect(repository.removeSchedule).toHaveBeenCalledWith(request);
  // });

  // it('should call repository.updateSchedule with the correct request', async () => {
  //   const request: IUpdateWorkoutSchedule = /* create your request object */;
  //   jest.spyOn(repository, 'updateSchedule').mockResolvedValue(/* your mock response */);

  //   await service.updateSchedule(request);

  //   expect(repository.updateSchedule).toHaveBeenCalledWith(request);
  // });

  // it('should call repository.getSchedules with the correct request', async () => {
  //   const request: IGetWorkoutSchedules = /* create your request object */;
  //   jest.spyOn(repository, 'getSchedules').mockResolvedValue(/* your mock response */);

  //   await service.getSchedules(request);

  //   expect(repository.getSchedules).toHaveBeenCalledWith(request);
  // });
// });


/*
 getMock() : IGotFriends{
    const results : IGotFriends = {
        friends: [
            {
                id: "id 1",
                name: "Testing 1",
                profileUrl: ""
            },
            {
                id: "id 2",
                name: "Testing 2",
                profileUrl: ""
            },
            {
                id: "id 3",
                name: "Testing 3",
                profileUrl: ""
            },
            {
                id: "id 4",
                name: "Testing 4",
                profileUrl: ""
            },
            {
                id: "id 5",
                name: "Testing 5",
                profileUrl: ""
            },
            {
                id: "id 6",
                name: "Testing 6",
                profileUrl: ""
            },
            {
                id: "id 7",
                name: "Testing 7",
                profileUrl: ""
            },
            {
                id: "id 8",
                name: "Testing 8",
                profileUrl: ""
            }
        ]
    }
    return results;
}



getMock(request:IGetWorkoutSchedules){
    const results:IGotWorkoutSchedules = {
        userId: request.userId,
        schedules: [
            {
                id: "ID 1",
                name:"Schedule 1",
                duration: 1,
                location: "zone fitness, menlyn",
                date: new Date(),
            },
            {
                id: "ID 2",
                name:"Schedule 2",
                duration: 1,
                location: "zone fitness, menlyn",
                date: new Date(),
            },
            {
                id: "ID 3",
                name:"Schedule 3",
                duration: 1,
                location: "zone fitness, menlyn",
                date: new Date(),
            },
            {
                id: "ID 4",
                name:"Schedule 4",
                duration: 1,
                location: "zone fitness, menlyn",
                date: new Date(),
            },
            {
                id: "ID 5",
                name:"Schedule 5",
                duration: 1,
                location: "zone fitness, menlyn",
                date: new Date(),
            },
            {
                id: "ID 6",
                name:"Schedule 6",
                duration: 1,
                location: "zone fitness, menlyn",
                date: new Date(),
            }
        ]
    }
    return results;
}
*/

