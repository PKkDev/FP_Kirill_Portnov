import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';
import { CalculatorViewComponent } from './calculator-view/calculator-view.component';


@NgModule({
  declarations: [
    CalculatorComponent,
    CalculatorViewComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ]
})
export class CalculatorModule { }
