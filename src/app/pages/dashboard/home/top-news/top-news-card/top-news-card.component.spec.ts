import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNewsCardComponent } from './top-news-card.component';

describe('TopNewsCardComponent', () => {
  let component: TopNewsCardComponent;
  let fixture: ComponentFixture<TopNewsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNewsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
