import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiComponent } from './ui.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { DataDetailComponent } from './data-detail/data-detail.component';


const routes: Routes = [
  { path: 'data', component: UiComponent },
  { path: 'data/create', component: CreateDataComponent },
  { path: 'data/update/:id', component: UpdateDataComponent },
  { path: 'data/detail/:id', component: DataDetailComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
