import {Component} from '@angular/core';
import {CreateForm} from "./h3ro-forms/interface/createForm";
import {ControlEnums} from "./h3ro-forms/enums/Enums";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  template:
    `
      <div class="container">
        <app-h3ro-forms [form]="form" ></app-h3ro-forms>
      </div>

    `
})
export class AppComponent {

  form:CreateForm[];

  constructor() {
    this.form = [
      {label:"name",
        name:"name",
        type:ControlEnums.TEXT,
        validations:[Validators.required],
        errorMsg:{required:"this is required!!"}
      },
      {label:"your age ",
        name:"age",
        type:ControlEnums.NUMBER,
        placeholder:"add"
      },
      {label:"your age ",
        name:"112",
        type:ControlEnums.NUMBER,
        placeholder:"add"
      },
    ];
  }

}
