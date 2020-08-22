import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetComponent } from './wish/greet/greet.component'

const routes: Routes = [
  {path: 'wishGreet', component: GreetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
