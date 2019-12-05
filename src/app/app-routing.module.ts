import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/escape-game/home/home.component';
import {EnigmeComponent} from './components/escape-game/enigme/enigme.component';

import {Page404Component} from './components/404-pages/page404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'secret', component: EnigmeComponent },
  { path: '**', redirectTo: '/page404', pathMatch: 'full' },
  { path: 'page404', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
