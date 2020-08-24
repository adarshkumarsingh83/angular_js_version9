import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EsparkFormComponent } from './espark-form/espark-form.component';

const routes: Routes = [
  { path: '' ,redirectTo: '' , pathMatch: 'full' },
  { path: 'form' , component: EsparkFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
