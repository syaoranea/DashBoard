import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SearchItemService {

  private readonly rootUrl: string = 'http://http://localhost:4200/';

  constructor() { }

  /* public postItem(item: string): Observable<any>{
    const url = 'http://localhost:4200/'
    return url;
  } */
}
