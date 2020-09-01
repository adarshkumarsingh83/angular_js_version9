import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UiRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';
import { ListDataComponent } from './list-data/list-data.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UiComponent, ListDataComponent, CreateDataComponent, UpdateDataComponent],
  imports: [
    CommonModule,
    UiRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[ListDataComponent, CreateDataComponent, UpdateDataComponent]
})
export class UiModule { }
