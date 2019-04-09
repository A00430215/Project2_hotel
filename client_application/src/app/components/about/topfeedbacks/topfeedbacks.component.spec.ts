import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopfeedbacksComponent } from './topfeedbacks.component';

describe('TopfeedbacksComponent', () => {
  let component: TopfeedbacksComponent;
  let fixture: ComponentFixture<TopfeedbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopfeedbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopfeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
