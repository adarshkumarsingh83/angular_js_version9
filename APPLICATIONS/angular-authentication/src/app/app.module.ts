import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { LoginComponent } from './security/login/login.component';
import { RegistrationComponent } from './security/registration/registration.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { AppServicesModule } from '../app/app-services/app-services.module';
import { AdminModule } from '../app/admin/admin.module';
import { UserModule } from '../app/user/user.module';
import { SecurityModule } from '../app/security/security.module';

@NgModule({
  declarations: [AppComponent, InvalidUrlComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StorageServiceModule,
    AppServicesModule,
    AdminModule,
    UserModule,
    SecurityModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
