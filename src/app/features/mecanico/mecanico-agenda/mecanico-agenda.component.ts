import { MecanicoService } from './../../../_services/mecanico/mecanico.service';
import { ClienteService } from './../../../_services/cliente/cliente.service';
import { TokenStorageService } from './../../../_services/token/token-storage.service';
import { Carro } from './../../../models/carro/carro.model';
import { Servico } from './../../../models/servico/servico.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mecanico-agenda',
  templateUrl: './mecanico-agenda.component.html',
  styleUrls: ['./mecanico-agenda.component.css']
})
export class MecanicoAgendaComponent implements OnInit {

  servicos: Servico[];
  isLoading = true;
  displayedColumns: string[] = ['hora', 'carro', 'status', 'acoes', 'tipo'];

  constructor(private tokenService: TokenStorageService, mecanicoService: MecanicoService) { }

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

  retornaCarro(carro: Carro) {
    return carro.placa + ' - ' + carro.modelo.marcaCarro.descricao + '/' + carro.modelo.descricao + ' ' + carro.anoModelo;
  }

  retornaDataAtual() {
    const data = Date.now();
  }

}
