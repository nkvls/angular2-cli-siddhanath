/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppNlamComponent } from './app-nlam.component';

describe('AppNlamComponent', () => {
  let component: AppNlamComponent;
  let fixture: ComponentFixture<AppNlamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNlamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNlamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
