import { environment } from 'src/environments/environment';
import { Servico } from './../../models/servico/servico.model';
import { AgendarServico } from './../../models/servico/agendar-servico.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CadastrarCarro } from './../../models/carro/cadastrar-carro.model';

const CLIENTE_API = environment.API + 'cliente';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  cadastrarCarro(carro: CadastrarCarro): Observable<any> {
    return this.http.post(CLIENTE_API + '/carros/cadastrar', {
      anoModelo: carro.anoModelo,
      codigoModeloCarro: carro.codigoModeloCarro,
      codigoProprietario: carro.codigoProprietario,
      placa: carro.placa
    }, httpOptions);
  }

  agendarServico(servico: AgendarServico): Observable<any> {
    return this.http.post(CLIENTE_API + '/servicos/agendar', {
      idCarro: servico.idCarro,
      idCliente: servico.idCliente,
      idTipoServico: servico.idTipoServico,
      dataHora: servico.datahora
    }, httpOptions)
  }

  getServicosCliente(idCliente): Observable<Servico[]> {
    return this.http.post<Servico[]>(CLIENTE_API + `/servicos/listar?idCliente=${idCliente}`, {
    }, httpOptions);
  }


}
