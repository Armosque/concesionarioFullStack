import { Automovil } from './../interfaces/automovil';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutomovilService {

  BASE_URL='http://localhost:5000'

  constructor(private http:HttpClient) { }

  getAutomoviles():Observable<Automovil[]>{
    return this.http.get<Automovil[]>(`${this.BASE_URL}/automovil`)
  }

  getAutomovil(id:number):Observable<Automovil>{
    return this.http.get<Automovil>(`${this.BASE_URL}/automovil/${id}`)

  }

  createAutomovil(automovil:Automovil):Observable<Automovil>{
    return this.http.post<Automovil>(`${this.BASE_URL}/automovil/create`, automovil)

  }
  deleteAutomovil(id:number):Observable<Automovil>{
    return this.http.delete<Automovil>(`${this.BASE_URL}/delete?automovilId=${id}`)
  }
  updateAutomovil(id:number, automovil:Automovil):Observable<Automovil>{
    return this.http.put<Automovil>(`${this.BASE_URL}/automovil/update?automovilId=${id}`, automovil)
  }


}
