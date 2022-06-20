import { Component, OnInit } from '@angular/core';

import { ClienteService } from './../../../_services/cliente/cliente.service';
import { TokenStorageService } from './../../../_services/token/token-storage.service';
import { Servico } from './../../../models/servico/servico.model';

@Component({
  selector: 'app-servicos-cliente',
  templateUrl: './servicos-cliente.component.html',
  styleUrls: ['./servicos-cliente.component.css']
})
export class ServicosClienteComponent implements OnInit {

  servicos: Servico[];
  isLoading = true;
  displayedColumns: string[] = ['dataHora', 'placa', 'carro', 'tipo', 'valor', 'status'];

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

  retornaCarro(servico): string {
    const marca = servico.carro.marca;
    const modelo = servico.carro.modelo;
    const ano = servico.carro.anoModelo;
    const retorno = `${marca}/${modelo} | ${ano}`
    return retorno;
  }

  retornaDataHora(servico: Servico) {
    const dataString = servico.dataHora as unknown as string;
    const dia = dataString.slice(8,10)
    const mes = dataString.slice(5,7)
    const ano = dataString.slice(0,4)
    const horaFormatada = dataString.slice(11, 16)
    return `${dia}/${mes}/${ano} - ${horaFormatada}hs`;
  }



}
