import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelerIfoComponent } from './traveler-ifo.component';

describe('TravelerIfoComponent', () => {
  let component: TravelerIfoComponent;
  let fixture: ComponentFixture<TravelerIfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelerIfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelerIfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
