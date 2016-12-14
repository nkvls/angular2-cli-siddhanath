import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule}     from '@angular/router';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppEventComponent } from './app-event/app-event.component';
import { AppAboutComponent } from './app-about/app-about.component';
import { AppNlamComponent } from './app-nlam/app-nlam.component';
import { AppContactComponent } from './app-contact/app-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppEventComponent,
    AppAboutComponent,
    AppNlamComponent,
    AppContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        { path: 'home', component: AppHomeComponent },
        { path: 'event', component: AppEventComponent },
        { path: 'about', component: AppAboutComponent },
        { path: 'contact', component: AppContactComponent },
        { path: 'nlam', component: AppNlamComponent },
        { path: '', component: AppHomeComponent }
    ]),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
