import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
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
    FuncionariosRoutingModule
  ]
})
export class FuncionariosModule { }
