import { TestBed } from '@angular/core/testing';

import { VoteChangesService } from './vote-changes.service';

describe('VoteChangesService', () => {
  let service: VoteChangesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoteChangesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
