import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/escape-game/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { EnigmeComponent } from './components/escape-game/enigme/enigme.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChatbotComponent } from './components/escape-game/chatbot/chatbot.component';
import { BibliothequeComponent } from './components/escape-game/bibliotheque/bibliotheque.component';
import { SenpaiComponent } from './components/escape-game/senpai/senpai.component';
import { Page404Component } from './components/404-pages/page404/page404.component';
import {AppService} from './services/app.service';
import {GameService} from './services/game.service';
import {MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    EnigmeComponent,
    ChatbotComponent,
    BibliothequeComponent,
    SenpaiComponent,
    HeaderComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AppService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
