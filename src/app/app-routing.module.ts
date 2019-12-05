import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Test1Component} from './components/404-pages/test1/test1.component';
import {HomeComponent} from './components/escape-game/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: Test1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
