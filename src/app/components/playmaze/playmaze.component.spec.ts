import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaymazeComponent } from './playmaze.component';

describe('PlaymazeComponent', () => {
  let component: PlaymazeComponent;
  let fixture: ComponentFixture<PlaymazeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaymazeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaymazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
