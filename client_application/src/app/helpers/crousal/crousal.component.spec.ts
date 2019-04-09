import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrousalComponent } from './crousal.component';

describe('CrousalComponent', () => {
  let component: CrousalComponent;
  let fixture: ComponentFixture<CrousalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrousalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
