import { PopoverController, NavController, LoadingController } from '@ionic/angular';
import { Store, Select } from '@ngxs/store';
import { WorkoutSchedulingPage } from './workout-scheduling.page';
import { WorkoutSchedulingState } from 'src/app/states';
import { GetWorkoutSchedules } from 'src/app/actions';
import { Observable, of } from 'rxjs';
import { IWorkoutScheduleModel } from 'src/app/models';
import { ActivatedRoute, Router } from '@angular/router';

describe('WorkoutSchedulingPage', () => {
  let workoutSchedulingPage: WorkoutSchedulingPage;
  let popoverControllerMock: any;
  let storeMock: any;
  let navControllerMock: any;
  let routeMock: any;
  let routerMock: any;
  const schedulesMock: IWorkoutScheduleModel[] = [
    { id: '1', status: 'completed' },
    { id: '2', status: 'uncompleted' },
    { id: '3', status: 'inSession' },
  ];

  beforeEach(() => {
    popoverControllerMock = {
      create: jest.fn(),
    };
    storeMock = {
      dispatch: jest.fn(),
      selectSnapshot: jest.fn(),
    };
    navControllerMock = {
      navigateRoot: jest.fn(),
    };
    routeMock = {
      queryParams: of({}),
    };
    routerMock = {
      getCurrentNavigation: jest.fn().mockReturnValue({
        extras: {
          state: {
            schedules: of(schedulesMock),
          },
        },
      }),
    };
    workoutSchedulingPage = new WorkoutSchedulingPage(
      popoverControllerMock,
      storeMock,
      navControllerMock,
      routeMock,
      routerMock
    );
  });

  describe('ngOnInit', () => {
    it('should call displayWorkoutSchedule', () => {
      const displayWorkoutScheduleSpy = jest.spyOn(workoutSchedulingPage, 'displayWorkoutSchedule');

      workoutSchedulingPage.ngOnInit();

      expect(displayWorkoutScheduleSpy).toHaveBeenCalled();
    });
  });

  describe('addSchedule', () => {
    it('should navigate to "/addSchedule"', () => {
      workoutSchedulingPage.addSchedule();

      expect(navControllerMock.navigateRoot).toHaveBeenCalledWith('/addSchedule');
    });
  });

  describe('displayWorkoutSchedule', () => {
    it('should dispatch GetWorkoutSchedules action and update schedules', () => {
      storeMock.selectSnapshot.mockReturnValue(schedulesMock);

      workoutSchedulingPage.displayWorkoutSchedule();

      expect(storeMock.dispatch).toHaveBeenCalledWith(new GetWorkoutSchedules());
      expect(workoutSchedulingPage.schedules).toEqual(schedulesMock);
      expect(workoutSchedulingPage.completedSchedules).toEqual([{ id: '1', status: 'completed' }]);
      expect(workoutSchedulingPage.uncompletedSchedules).toEqual([{ id: '2', status: 'uncompleted' }]);
      expect(workoutSchedulingPage.inSessionSchedules).toEqual([{ id: '3', status: 'inSession' }]);
    });
  });

  describe('onSegmentChange', () => {
    it('should update selectedSegment', () => {
      const event = { detail: { value: '1' } };

      workoutSchedulingPage.onSegmentChange(event);

      expect(workoutSchedulingPage.selectedSegment).toBe('1');
    });
  });
});
