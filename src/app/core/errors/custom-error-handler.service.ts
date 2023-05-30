import {ErrorHandler, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandlerService implements ErrorHandler{

  constructor() { }

  handleError(error: Error): void {
    console.log("from Custem Error")
    console.log(error.name)
  }
}
