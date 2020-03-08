import { TestBed } from '@angular/core/testing';

import { BorderService } from './border.service';

describe('BorderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BorderService = TestBed.get(BorderService);
    expect(service).toBeTruthy();
  });
});
