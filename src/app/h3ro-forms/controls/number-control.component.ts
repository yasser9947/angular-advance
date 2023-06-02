import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BaseControl} from "./base-control";

@Component({
  selector: 'number-control',
  template:
    `
      <label class="form-label" > {{label}}</label>
      <input
        [placeholder]="placeholder?placeholder:''"
        [formControl]="control"
        [ngClass]="{'border-danger':control.touched&&control.errors}"
        class="form-control"
        type="number"/>
      <p class="text-danger" *ngIf="control.touched&&control.errors">{{errorMsg?.required?errorMsg?.required:'this is required'}}</p>
      {{cheRender()}}
    `,
  inputs:  BaseControl.inputs,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NumberControlComponent extends BaseControl{


}
