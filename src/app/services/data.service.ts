import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  nombreBar: string = 'Sin Nombre';

  constructor() { }

  changeNamed(name: any){
    this.nombreBar = name;
  }
}
