import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DbViewComponent } from './db-view.component';

const routes: Routes = [
  {
    path: '',
    component: DbViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DbViewRoutingModule { }
