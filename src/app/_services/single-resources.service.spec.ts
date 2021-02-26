import { TestBed } from '@angular/core/testing';

import { SingleResourcesService } from './single-resources.service';

describe('SingleResourcesService', () => {
  let service: SingleResourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleResourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
