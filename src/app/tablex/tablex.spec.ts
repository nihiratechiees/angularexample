import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablex } from './tablex';

describe('Tablex', () => {
  let component: Tablex;
  let fixture: ComponentFixture<Tablex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tablex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
