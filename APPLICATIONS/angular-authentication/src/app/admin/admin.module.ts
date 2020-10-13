import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppServicesModule } from '../app-services/app-services.module';

@NgModule({
  declarations: [AdminHomeComponent],
  imports: [CommonModule, BrowserModule, AppServicesModule],
  exports:[]
})
export class AdminModule {}
