import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { GreetComponent } from './wish/greet/greet.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch:'full' },
  { path: 'greet', component:  GreetComponent},
  { path: '**', component: InvalidUrlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
