import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFeaturesComponent } from './nav-features.component';

describe('NavFeaturesComponent', () => {
  let component: NavFeaturesComponent;
  let fixture: ComponentFixture<NavFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
