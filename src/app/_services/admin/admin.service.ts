import { TipoServico } from './../../models/servico/tipo-servico.model';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const ADMIN_API = 'http://localhost:8090/agenda-mecanica/admin/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getMecanicos(): Observable<any> {
    return this.http.post(ADMIN_API + 'relatorios/lista-mecanicos', {
    }, httpOptions);
  }

  cadastrarTipoServico( tipoServico: TipoServico): Observable<any> {
    return this.http.post(ADMIN_API + 'servicos/cadastrar', {
      tempo: tipoServico.tempo,
      valor: tipoServico.valor,
      descricao: tipoServico.descricao
    }, httpOptions);
  }

}
