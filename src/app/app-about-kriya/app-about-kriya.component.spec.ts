/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppAboutKriyaComponent } from './app-about-kriya.component';

describe('AppAboutKriyaComponent', () => {
  let component: AppAboutKriyaComponent;
  let fixture: ComponentFixture<AppAboutKriyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAboutKriyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAboutKriyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
