import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminGreetComponent } from './admin-greet/admin-greet.component';
import { UserGreetComponent } from './user-greet/user-greet.component';
import { WishHomeComponent } from './wish-home/wish-home.component';



@NgModule({
  declarations: [AdminGreetComponent, UserGreetComponent, WishHomeComponent],
  imports: [
    CommonModule
  ]
})
export class WishModule { }
