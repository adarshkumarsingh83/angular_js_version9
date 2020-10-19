import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from './security/security.guard';
import { InvalidUrlComponent } from './security/invalid-url/invalid-url.component';
import { LoginComponent } from './security/login/login.component';
import { RegistrationComponent } from './security/registration/registration.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserHomeComponent } from './user/user-home/user-home.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', canActivate: [SecurityGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [SecurityGuard],
  },
  { path: 'user', component: UserHomeComponent, canActivate: [SecurityGuard] },
  { path: '**', component: InvalidUrlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
