import {Component, Input} from "@angular/core";
import {UntypedFormControl} from "@angular/forms";

export class BaseControl {
  label: string | undefined;
  placeholder?:string;
  control:UntypedFormControl = new UntypedFormControl();
  errorMsg?:{
    required?:string,
    max?:string,
    min?:string
  };
  static inputs = ["label","placeholder","control","errorMsg"]
}
