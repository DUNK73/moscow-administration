/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopTileComponent } from './top-tile.component';

describe('TopTileComponent', () => {
  let component: TopTileComponent;
  let fixture: ComponentFixture<TopTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
