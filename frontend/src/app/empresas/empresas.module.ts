import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmpresasRoutingModule } from './empresas-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmpresasModule { }
