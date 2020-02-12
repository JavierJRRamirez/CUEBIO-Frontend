import { TestBed } from '@angular/core/testing';

import { AppleService } from './apple.service';
import { Apple } from './apple';

describe('AppleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppleService = TestBed.get(AppleService);
    expect(service).toBeTruthy();
  });

  it('#getApple', (done: DoneFn) => {
    const service: AppleService = TestBed.get(AppleService);
    service.getApples().subscribe(apples => {
      expect(apples.length).toBeGreaterThan(0);
      done();
    });
  });
});
