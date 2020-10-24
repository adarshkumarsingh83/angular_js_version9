import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [AdminHomeComponent],
  imports: [CommonModule, AdminRoutingModule, LayoutModule],
  exports: [AdminHomeComponent],
})
export class AdminModule {}
