import { TestBed } from '@angular/core/testing';

import { SingleUserService } from './single-user.service';

describe('SingleUserService', () => {
  let service: SingleUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
