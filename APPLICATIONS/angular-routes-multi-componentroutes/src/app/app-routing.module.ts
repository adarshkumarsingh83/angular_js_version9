import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { AdminWishComponent } from './greet/admin-wish/admin-wish.component';
import {UserWishComponent} from './greet/user-wish/user-wish.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch:'full' },
  { path: 'admin', component:  AdminWishComponent},
  { path: 'user', component:  UserWishComponent},
  { path: '**', component: InvalidUrlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
