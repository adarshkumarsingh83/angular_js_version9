import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { WishComponent } from './wish/wish.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch:'full' },
  { path: 'wish' ,component: WishComponent },
  { path: 'wish/:message' ,component: WishComponent },
  { path: 'wish/:message/:name' ,component: WishComponent },
  { path: '**', component: InvalidUrlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
