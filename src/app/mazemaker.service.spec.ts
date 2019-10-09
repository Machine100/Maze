import { TestBed } from '@angular/core/testing';

import { MazemakerService } from './mazemaker.service';

describe('MazemakerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MazemakerService = TestBed.get(MazemakerService);
    expect(service).toBeTruthy();
  });
});
