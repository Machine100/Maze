import { TestBed } from '@angular/core/testing';

import { MazeplayService } from './mazeplay.service';

describe('MazeplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MazeplayService = TestBed.get(MazeplayService);
    expect(service).toBeTruthy();
  });
});
