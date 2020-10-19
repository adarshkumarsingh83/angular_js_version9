import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  declarations: [AdminHomeComponent],
  imports: [CommonModule],
  exports: [AdminHomeComponent],
})
export class AdminModule {}
