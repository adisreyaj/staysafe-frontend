import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateStatsComponent } from './state-stats.component';

describe('StateStatsComponent', () => {
  let component: StateStatsComponent;
  let fixture: ComponentFixture<StateStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
