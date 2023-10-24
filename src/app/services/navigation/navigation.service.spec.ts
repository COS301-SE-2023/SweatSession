import { Location } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Location],
    });
    service = TestBed.inject(NavigationService);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should navigate back to previous URL', () => {
    jest.spyOn(location, 'back');
    service['history'] = ['/page1', '/page2', '/page3'];
    service.back();
    expect(location.back).toHaveBeenCalled();
    expect(service['history']).toEqual(['/page1', '/page2']);
  });

  it('should navigate to home if history is empty', () => {
    jest.spyOn(router, 'navigateByUrl');
    service['history'] = [];
    service.back();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
  });

  it('should subscribe to router events', () => {
    jest.spyOn(router.events, 'subscribe');
    service = new NavigationService(router, location);
    expect(router.events.subscribe).toHaveBeenCalled();
  });
});
