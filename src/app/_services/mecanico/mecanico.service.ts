import { Servico } from './../../models/servico/servico.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const CLIENTE_API = 'http://localhost:8090/agenda-mecanica/mecanico/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MecanicoService {

  constructor(private http: HttpClient) { }

  getAgendaDia(): Observable<Servico[]> {
    return this.http.post<Servico[]>(CLIENTE_API + 'agenda', {
    }, httpOptions);
  }

}
