import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetupService {
  SUMMER_BASE_URL!: string;

  constructor() { }

  setOP(value: string){

  }

  setSummer(value: string){
    this.SUMMER_BASE_URL = value || 'http://localhost:4200';
  }
}
