import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BaseControl} from "./base-control";


@Component({
  selector: 'text-control',
  template:
    `
      <label class="form-label" > {{label}}</label>
      <input
        [placeholder]="placeholder?placeholder:''"
        [formControl]="control"
             class="form-control "
            [ngClass]="{'border-danger':control.touched&&control.errors}"
             type="text" />
      <p class="text-danger" *ngIf="control.touched&&control.errors">{{errorMsg?.required?errorMsg?.required:'this is required'}}</p>
{{cheRender()}}
    `,
  inputs:  BaseControl.inputs,
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class TextControlComponent extends BaseControl implements OnInit{
  ngOnInit(): void {

  }


}
