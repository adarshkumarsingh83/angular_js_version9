import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserWishComponent } from './user-wish/user-wish.component';
import { AdminWishComponent } from './admin-wish/admin-wish.component';



@NgModule({
  declarations: [UserWishComponent, AdminWishComponent],
  imports: [
    CommonModule
  ]
})
export class GreetModule { }
