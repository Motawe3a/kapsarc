import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponentB } from './chartB.component';

describe('ChartComponentB', () => {
  let component: ChartComponentB;
  let fixture: ComponentFixture<ChartComponentB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartComponentB ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponentB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
