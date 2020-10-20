import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '../security/security.guard';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  { path: '', component: UserHomeComponent, canActivate: [SecurityGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
