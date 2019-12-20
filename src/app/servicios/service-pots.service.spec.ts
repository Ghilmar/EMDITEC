import { TestBed } from '@angular/core/testing';

import { ServicePotsService } from './service-pots.service';

describe('ServicePotsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicePotsService = TestBed.get(ServicePotsService);
    expect(service).toBeTruthy();
  });
});
