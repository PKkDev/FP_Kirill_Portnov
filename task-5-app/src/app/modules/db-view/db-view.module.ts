import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbViewRoutingModule } from './db-view-routing.module';
import { DbViewComponent } from './db-view.component';
import { DbTableViewComponent } from './db-table-view/db-table-view.component';
import { CompackButtonModule } from 'ngx-compack';


@NgModule({
  declarations: [
    DbViewComponent,
    DbTableViewComponent
  ],
  imports: [
    CommonModule,
    DbViewRoutingModule,
    CompackButtonModule
  ]
})
export class DbViewModule { }
