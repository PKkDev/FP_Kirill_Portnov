import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'calculator',
    loadChildren: () => import('./modules/calculator/calculator.module').then(m => m.CalculatorModule)
  },
  {
    path: 'db-view',
    loadChildren: () => import('./modules/db-view/db-view.module').then(m => m.DbViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
