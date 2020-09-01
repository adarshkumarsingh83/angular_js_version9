import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UiRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { FormsModule } from '@angular/forms';
import { DataDetailComponent } from './data-detail/data-detail.component';

@NgModule({
  declarations: [UiComponent, CreateDataComponent, UpdateDataComponent, DataDetailComponent],
  imports: [
    CommonModule,
    UiRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[CreateDataComponent, UpdateDataComponent, DataDetailComponent]
})
export class UiModule { }
