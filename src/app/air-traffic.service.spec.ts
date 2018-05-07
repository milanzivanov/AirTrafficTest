import { TestBed, inject } from '@angular/core/testing';

import { AirTrafficService } from './air-traffic.service';

describe('AirTrafficService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirTrafficService]
    });
  });

  it('should be created', inject([AirTrafficService], (service: AirTrafficService) => {
    expect(service).toBeTruthy();
  }));
});
