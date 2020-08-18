/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CameraListComponent } from './camera-list.component';

describe('CameraListComponent', () => {
  let component: CameraListComponent;
  let fixture: ComponentFixture<CameraListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
