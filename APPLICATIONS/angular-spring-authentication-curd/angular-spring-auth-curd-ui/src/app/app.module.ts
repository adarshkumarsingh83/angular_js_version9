import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityModule } from './security/security.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { AppServicesModule } from './app-services/app-services.module';
import { StorageServiceModule } from 'ngx-webstorage-service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StorageServiceModule,
    AppRoutingModule,
    SecurityModule,
    AdminModule,
    UserModule,
    AppServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
