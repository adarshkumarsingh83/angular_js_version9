import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch:'full' },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: '**', component: InvalidUrlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
