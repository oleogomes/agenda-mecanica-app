import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CadastrarCarro } from './../../models/carro/cadastrar-carro.model';

const CLIENTE_API = 'http://localhost:8090/agenda-mecanica/cliente/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  cadastrarCarro(carro: CadastrarCarro): Observable<any> {
    return this.http.post(CLIENTE_API + 'carros/cadastrar', {
      anoModelo: carro.anoModelo,
      codigoModeloCarro: carro.codigoModeloCarro,
      codigoProprietario: carro.codigoProprietario,
      placa: carro.placa
    }, httpOptions);
  }
}
