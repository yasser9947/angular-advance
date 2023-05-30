import { Injectable } from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }


  loadItems():Observable<any> {

    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/todos?_start=0&_limit=4`).pipe(
      catchError(err => of([1,2,3])),
      map((e:any) => e)
    )
  }
}
