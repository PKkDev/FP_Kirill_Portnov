import { Component } from '@angular/core';
import { OperationType } from './operation-type';
import { executeOpration, getOperationStr, isSkeepActiveNumber } from './calculator-view.constants';

@Component({
  selector: 'app-calculator-view',
  templateUrl: './calculator-view.component.html',
  styleUrls: ['./calculator-view.component.scss']
})
export class CalculatorViewComponent {

  public expression: string = '';
  public activeNUmber: string = '0';

  private isAfterOperation = false;
  private isAfterExecute = false;

  private prevActiveNumber: number | null = null;
  private prevLastoperation: OperationType | null = null;
  private lastoperation: OperationType | null = null;

  public inputOperation(type: OperationType) {
    const txt = getOperationStr(type, +this.activeNUmber);

    if (this.isAfterExecute) {

      if (this.prevLastoperation && this.lastoperation && isSkeepActiveNumber(this.lastoperation)) {
        const oper = type;

        const res = executeOpration(this.prevLastoperation!, this.prevActiveNumber!, +this.activeNUmber);

        this.cleare();

        this.inputDigital(res);
        this.inputOperation(oper);

      } else {
        const oper = type;
        const res = +this.activeNUmber!;

        this.cleare();

        this.inputDigital(res);
        this.inputOperation(oper);
      }
    } else {
      if (this.lastoperation && this.lastoperation === type) {

        // const left = +this.activeNUmber;
        // const right = +this.prevActiveNumber!;
        const oper = this.lastoperation;

        const res = executeOpration(this.lastoperation, this.prevActiveNumber!, +this.activeNUmber);

        this.cleare();

        this.inputDigital(res);
        this.inputOperation(oper);

      } else {

        if (this.lastoperation && this.lastoperation !== type) {

          const oldOp = getOperationStr(this.lastoperation, +this.activeNUmber);
          const newOp = getOperationStr(type, +this.activeNUmber);

          if (isSkeepActiveNumber(type)) {
            this.prevLastoperation = this.lastoperation;
            this.lastoperation = type;
            this.expression += `${newOp}`;

            const res = executeOpration(type, +this.activeNUmber, 0);
            this.isAfterOperation = true;
            this.inputDigital(res);
            this.isAfterExecute = true;

          } else {
            this.lastoperation = type;
            this.expression = this.expression.replace(oldOp, newOp);
          }

        } else {
          if (isSkeepActiveNumber(type)) {
            this.writeExpression(txt);

            this.prevActiveNumber = +this.activeNUmber;
            this.lastoperation = type;

            this.isAfterOperation = true;

            this.executeExpression();
          } else {
            this.writeExpression(this.activeNUmber, txt);

            this.prevActiveNumber = +this.activeNUmber;
            this.lastoperation = type;

            this.isAfterOperation = true;
          }
        }
      }
    }
  }

  public inputDigital(digital: number) {

    if (this.activeNUmber === '0' && digital === 0)
      return;

    if (this.activeNUmber === '0' && digital !== 0)
      this.activeNUmber = '';

    if (this.isAfterExecute) {
      this.cleareAll();
    }

    if (this.isAfterOperation) {
      this.activeNUmber = digital.toString();
      this.isAfterOperation = false;
    } else {
      this.activeNUmber += digital.toString();
    }

  }

  public executeExpression() {
    console.log('executeExpression');

    if (this.isAfterExecute) {

      this.isAfterExecute = false;

      const left = +this.activeNUmber;
      const right = +this.prevActiveNumber!;
      const oper = this.lastoperation!;

      this.cleare();

      if (isSkeepActiveNumber(oper)) {
        this.inputDigital(left);
        this.inputOperation(oper);
      } else {
        this.inputDigital(left);
        this.inputOperation(oper);
        this.inputDigital(right);

        this.executeExpression();
      }

    } else {
      this.isAfterExecute = true;

      const res = executeOpration(this.lastoperation!, this.prevActiveNumber!, +this.activeNUmber);

      if (!isSkeepActiveNumber(this.lastoperation!)) {
        this.expression += `${this.activeNUmber}`;
      }

      this.prevActiveNumber = +this.activeNUmber;
      this.activeNUmber = res.toString();
    }
  }

  private writeExpression(digital: string, operation?: string | undefined) {
    if (operation)
      this.expression += `${digital}${operation}`;
    else
      this.expression += `${digital}`;
  }

  public sliceActiveNumb() {
    if (!this.activeNUmber) return;
    this.activeNUmber = this.activeNUmber.slice(0, -1);
  }

  public resetAll() {
    this.cleareAll();
    this.activeNUmber = '0';
  }

  public cleareAll() {
    this.isAfterOperation = false;
    this.isAfterExecute = false;
    this.cleare();
  }

  private cleare() {
    this.expression = '';
    this.activeNUmber = '';
    this.prevActiveNumber = null;
    this.lastoperation = null;
  }

}
