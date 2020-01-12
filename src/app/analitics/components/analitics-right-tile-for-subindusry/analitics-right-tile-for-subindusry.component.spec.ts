/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnaliticsRightTileForSubIndustryComponent } from './analitics-right-tile.component';

describe('AnaliticsRightTileForSubIndustryComponent', () => {
  let component: AnaliticsRightTileForSubIndustryComponent;
  let fixture: ComponentFixture<AnaliticsRightTileForSubIndustryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaliticsRightTileForSubIndustryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliticsRightTileForSubIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
