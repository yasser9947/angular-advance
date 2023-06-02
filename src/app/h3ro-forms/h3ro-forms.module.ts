import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { H3roFormsComponent } from './h3ro-forms/h3ro-forms.component';
import { TextControlComponent } from './controls/text-control.component';
import { NumberControlComponent } from './controls/number-control.component';
import {BaseControl} from "./controls/base-control";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        H3roFormsComponent,
        TextControlComponent,
        NumberControlComponent
    ],
    exports: [
        H3roFormsComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class H3roFormsModule { }
