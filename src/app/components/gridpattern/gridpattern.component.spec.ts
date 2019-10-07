import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridpatternComponent } from './gridpattern.component';

describe('GridpatternComponent', () => {
  let component: GridpatternComponent;
  let fixture: ComponentFixture<GridpatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridpatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridpatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
