import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent, InvalidUrlComponent],
  imports: [CommonModule, FormsModule],
  exports: [LoginComponent, RegistrationComponent, InvalidUrlComponent],
})
export class SecurityModule {}
