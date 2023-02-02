import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../models/paisModel';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor( private http:HttpClient) { }

  api = environment.apiUrl;

  getPais(userId: string): Observable<Pais>{
    const url = this.api + userId;
    return this.http.get<Pais>(url);
  }
}
