import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SecurityGuard } from '../security/security.guard';

const routes: Routes = [
  { path: '', component: AdminHomeComponent, canActivate: [SecurityGuard] },
  {
    path: 'employees-mgmt',
    loadChildren: () =>
      import('./emloyee-managment/emloyee-managment.module').then(
        (m) => m.EmloyeeManagmentModule
      ),
  },
  {
    path: 'users-mgmt',
    loadChildren: () =>
      import('./user-managment/user-managment.module').then(
        (m) => m.UserManagmentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
