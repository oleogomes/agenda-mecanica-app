import { TipoServico } from './../../models/servico/tipo-servico.model';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const ADMIN_API = environment.API + 'admin';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getMecanicos(): Observable<any> {
    return this.http.post(ADMIN_API + '/relatorios/lista-mecanicos', {
    }, httpOptions);
  }

  getClientes(): Observable<any> {
    return this.http.post(ADMIN_API + '/relatorios/lista-clientes', {
    }, httpOptions);
  }

  cadastrarTipoServico( tipoServico: TipoServico): Observable<any> {
    return this.http.post(ADMIN_API + '/servicos/cadastrar', {
      tempo: tipoServico.tempo,
      valor: tipoServico.valor,
      descricao: tipoServico.descricao
    }, httpOptions);
  }

  getServicos(): Observable<any> {
    return this.http.post(ADMIN_API + '/servicos/listar', {
    }, httpOptions);
  }

}
