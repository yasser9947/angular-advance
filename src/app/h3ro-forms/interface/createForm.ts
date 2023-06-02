import {ValidatorFn} from "@angular/forms";
import {ControlEnums} from "../enums/Enums";

export interface CreateForm {
  label:string;
  name:string;
  type:ControlEnums;
  errorMsg?:{
    required?:string,
    max?:string,
    min?:string
  };
  class?:string;
  size?:{ lg?:number, md?:number, sm?:number };
  validations?:ValidatorFn[]|any[];
  placeholder?:string;
}
