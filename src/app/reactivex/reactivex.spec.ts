import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactivex } from './reactivex';

describe('Reactivex', () => {
  let component: Reactivex;
  let fixture: ComponentFixture<Reactivex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactivex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactivex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
