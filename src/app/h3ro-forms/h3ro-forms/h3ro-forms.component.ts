import {Component, inject, Input, OnInit} from '@angular/core';
import {CreateForm} from "../interface/createForm";
import {ControlEnums} from "../enums/Enums";
import {FormBuilder, UntypedFormControl, UntypedFormGroup} from "@angular/forms";

@Component({
  selector: 'app-h3ro-forms',
  template:
    `
      <form [formGroup]="formGroup">
        <div class="row">
          <ng-container *ngFor="let control of form">

            <text-control
              *ngIf="control.type === 'text'"
              class="col-lg-{{control.size?.lg?control.size?.lg:'4'}} col-md-{{control.size?.lg?control.size?.lg:'4'}} col-sm-{{control.size?.sm?control.size?.sm:'4'}} {{control.class}}"
              [label]="control.label"
              [placeholder]="control.placeholder"
              [control]="formGroup.get(control.name)"
              [errorMsg]="control.errorMsg"
            ></text-control>

            <number-control
              *ngIf="control.type === 'number'"
              class="col-lg-{{control.size?.lg?control.size?.lg:'4'}} col-md-{{control.size?.lg?control.size?.lg:'4'}} col-sm-{{control.size?.sm?control.size?.sm:'4'}} {{control.class}}"
              [label]="control.label"
              [placeholder]="control.placeholder"
              [control]="formGroup.get(control.name)"
            ></number-control>

          </ng-container>

        </div>
        <button class="btn btn-outline-dark w-25 mt-3" (click)="submit()"> click</button>
      </form>
    `
})
export class H3roFormsComponent implements OnInit {
  @Input()
  form?: CreateForm[];
  fp: FormBuilder = inject(FormBuilder);
  formGroup: UntypedFormGroup = new UntypedFormGroup({});

  ngOnInit(): void {
    if (typeof this.form == "object") {
      this.form.forEach(control => this.formGroup.addControl(control.name, new UntypedFormControl('', control.validations)))
    }
  }

  submit() {
    console.log(this.formGroup.value)
  }
}
