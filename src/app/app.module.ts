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
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { AppAboutYogiComponent } from './app-about-yogi/app-about-yogi.component';
import { AppAboutBabajiComponent } from './app-about-babaji/app-about-babaji.component';
import { AppAboutKriyaComponent } from './app-about-kriya/app-about-kriya.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppEventComponent,
    AppAboutComponent,
    AppNlamComponent,
    AppContactComponent,
    AppNavigationComponent,
    AppAboutYogiComponent,
    AppAboutBabajiComponent,
    AppAboutKriyaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        { path: 'home', component: AppHomeComponent },
        { path: 'event', component: AppEventComponent },
        { path: 'about', component: AppAboutComponent },
        { path: 'contact', component: AppContactComponent },
        { path: 'nlam', component: AppNlamComponent },
        { path: 'aboutyogi', component: AppAboutYogiComponent },
        { path: 'aboutbabaji', component: AppAboutBabajiComponent },
        { path: 'aboutkriya', component: AppAboutKriyaComponent },
        { path: '', component: AppHomeComponent }
    ]),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
