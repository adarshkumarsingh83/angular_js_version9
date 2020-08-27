import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import {  OservableProgressComponent } from './oservable-progress/oservable-progress.component';

const routes: Routes = [
  { path: '' ,redirectTo: '' , pathMatch: 'full' },
  { path: 'progress', component: OservableProgressComponent},
  { path: '**' , component: InvalidUrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }