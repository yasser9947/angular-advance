import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {H3roFormsModule} from "./h3ro-forms/h3ro-forms.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    H3roFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
