import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';
import {CustomErrorHandlerService} from "./core/errors/custom-error-handler.service";

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide:ErrorHandler , useClass:CustomErrorHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
