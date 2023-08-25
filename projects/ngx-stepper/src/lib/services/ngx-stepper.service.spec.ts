import { TestBed } from '@angular/core/testing';

import { NgxStepperService } from './ngx-stepper.service';

describe('NgxStepperService', () => {
  let service: NgxStepperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxStepperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
