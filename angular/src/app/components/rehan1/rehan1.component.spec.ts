import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rehan1Component } from './rehan1.component';

describe('Rehan1Component', () => {
  let component: Rehan1Component;
  let fixture: ComponentFixture<Rehan1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rehan1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rehan1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
