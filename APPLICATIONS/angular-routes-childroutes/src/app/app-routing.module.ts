import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import {AdminGreetComponent} from './wish/admin-greet/admin-greet.component';
import {UserGreetComponent} from './wish/user-greet/user-greet.component';
import {WishHomeComponent} from './wish/wish-home/wish-home.component'

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch:'full' },
  { path: 'espark', component: WishHomeComponent },
  { path: 'espark', children: [
    { path: 'wish/admin', component: AdminGreetComponent }, 
    { path: 'wish/user', component: UserGreetComponent }] },
  { path: '**', component: InvalidUrlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
