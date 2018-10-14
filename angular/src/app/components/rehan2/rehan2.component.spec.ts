import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rehan2Component } from './rehan2.component';

describe('Rehan2Component', () => {
  let component: Rehan2Component;
  let fixture: ComponentFixture<Rehan2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rehan2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rehan2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
