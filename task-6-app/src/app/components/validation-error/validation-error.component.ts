import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.scss']
})
export class ValidationErrorComponent {
  @Input() control: AbstractControl | null = null;
  @Input() template: string | undefined = '';
  @Input() viewError: boolean = false;
}
