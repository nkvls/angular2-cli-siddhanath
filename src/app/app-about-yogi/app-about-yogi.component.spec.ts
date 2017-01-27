/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppAboutYogiComponent } from './app-about-yogi.component';

describe('AppAboutYogiComponent', () => {
  let component: AppAboutYogiComponent;
  let fixture: ComponentFixture<AppAboutYogiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAboutYogiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAboutYogiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
