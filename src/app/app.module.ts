import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/escape-game/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { Page404Component } from './components/404-pages/page404/page404.component';
import {AppService} from './services/app.service';
import {GameService} from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AppService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
