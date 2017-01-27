/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppAboutBabajiComponent } from './app-about-babaji.component';

describe('AppAboutBabajiComponent', () => {
  let component: AppAboutBabajiComponent;
  let fixture: ComponentFixture<AppAboutBabajiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAboutBabajiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAboutBabajiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
