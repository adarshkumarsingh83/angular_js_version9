import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidComponent } from './invalid/invalid.component';

const routes: Routes = [
  { path: '' , redirectTo: '', pathMatch: 'full' },
  { path: '**' , component:  InvalidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
