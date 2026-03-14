import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signalformx } from './signalformx';

describe('Signalformx', () => {
  let component: Signalformx;
  let fixture: ComponentFixture<Signalformx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signalformx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signalformx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
