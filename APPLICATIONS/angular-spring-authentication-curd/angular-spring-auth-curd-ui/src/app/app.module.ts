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
import { FlashMessagesModule } from 'angular2-flash-messages';
import { LayoutModule } from './layout/layout.module';
import { HeaderService } from './app-services/header.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    StorageServiceModule,
    AppRoutingModule,
    SecurityModule,
    AdminModule,
    UserModule,
    AppServicesModule,
    LayoutModule,
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
