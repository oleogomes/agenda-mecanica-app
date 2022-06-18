import { Observable } from 'rxjs';
import { TipoServico } from './../../models/servico/tipo-servico.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const SERVICO_API = 'http://localhost:8090/agenda-mecanica/servico/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient) { }

  getTiposServico(): Observable<TipoServico[]> {
    return this.http.post<TipoServico[]>(SERVICO_API + 'tipos', {
    }, httpOptions)
  }
}
