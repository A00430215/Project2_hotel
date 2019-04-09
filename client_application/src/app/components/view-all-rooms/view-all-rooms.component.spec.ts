import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllRoomsComponent } from './view-all-rooms.component';

describe('ViewAllRoomsComponent', () => {
  let component: ViewAllRoomsComponent;
  let fixture: ComponentFixture<ViewAllRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
