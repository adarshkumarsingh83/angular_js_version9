import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserHomeComponent],
  imports: [CommonModule, UserRoutingModule],
  exports: [UserHomeComponent],
})
export class UserModule {}
