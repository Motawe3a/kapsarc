import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBComponent } from './tableB.component';

describe('TableBComponent', () => {
  let component: TableBComponent;
  let fixture: ComponentFixture<TableBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
