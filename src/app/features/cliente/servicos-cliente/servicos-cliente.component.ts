import { Carro } from './../../../models/carro/carro.model';
import { ClienteService } from './../../../_services/cliente/cliente.service';
import { TokenStorageService } from './../../../_services/token/token-storage.service';
import { Servico } from './../../../models/servico/servico.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos-cliente',
  templateUrl: './servicos-cliente.component.html',
  styleUrls: ['./servicos-cliente.component.css']
})
export class ServicosClienteComponent implements OnInit {

  servicos: Servico[];
  isLoading = true;
  displayedColumns: string[] = ['carro', 'data', 'status'];

  constructor(private tokenService: TokenStorageService, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getServicos();
  }

  getServicos(): void {
    this.clienteService.getServicosCliente(this.getUsuarioLogado()).subscribe({
      next: (servicos) => {
        this.servicos = servicos;
        this.isLoading = false;
      }
    })
  }

  getUsuarioLogado(){
   return this.tokenService.getUser().id;
  }

  retornaData(data) {
    debugger;
  }

  retornaCarro(carro: Carro) {
    return carro.placa + ' - ' + carro.modelo.marcaCarro.descricao + '/' + carro.modelo.descricao + ' ' + carro.anoModelo;
  }


}
