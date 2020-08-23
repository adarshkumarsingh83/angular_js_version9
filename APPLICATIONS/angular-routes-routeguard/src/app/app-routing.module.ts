import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { SecurityGuard} from './security.guard';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch:'full' },
  { path: 'admin', component: AdminHomeComponent,canActivate: [SecurityGuard]},
  { path: 'user', component: UserHomeComponent, canActivate: [SecurityGuard]},
  { path: '**', component: InvalidUrlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
