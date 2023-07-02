import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasApiComponent } from './consultas-api.component';

describe('ConsultasApiComponent', () => {
  let component: ConsultasApiComponent;
  let fixture: ComponentFixture<ConsultasApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
