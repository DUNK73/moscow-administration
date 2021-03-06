/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KpiValueComponent } from './kpi-value.component';

describe('KpiValueComponent', () => {
  let component: KpiValueComponent;
  let fixture: ComponentFixture<KpiValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
