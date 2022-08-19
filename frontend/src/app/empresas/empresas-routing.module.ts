import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'empresa', component: IndexComponent },
  { path: 'empresa/:id/view', component: ViewComponent },
  { path: 'empresa/create', component: CreateComponent },
  { path: 'empresa/:id/update', component: UpdateComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
