import {Component, Input} from "@angular/core";
import {UntypedFormControl} from "@angular/forms";
let r = 1;
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
  cheRender(){
    r++
    console.log("render "+this.label +' '+ r)
    return "sasa"
  }
}
