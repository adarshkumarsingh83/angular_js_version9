import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishComponent } from './wish/wish.component';

const routes: Routes = [
  { path: 'wish' , component: WishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
