import { MarcaCarro } from './../../models/carro/marca-carro.model';
import { ModeloCarro } from './../../models/carro/modelo-carro.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const CARRO_API = 'http://localhost:8090/agenda-mecanica/carro/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private http: HttpClient) { }

  getMarcas(): Observable<MarcaCarro[]> {
    return this.http.post<MarcaCarro[]>(CARRO_API + 'marca/get-marcas', {
    }, httpOptions);
  }

  getModelosByMarca(idMarca): Observable<ModeloCarro[]> {
    return this.http.post<ModeloCarro[]>(CARRO_API + `modelo/get-by-marca?idMarca=${idMarca}`, {
    }, httpOptions);
  }

}
