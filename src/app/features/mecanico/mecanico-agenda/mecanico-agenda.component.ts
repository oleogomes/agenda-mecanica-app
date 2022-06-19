import { Router } from '@angular/router';
import { Mecanico } from './../../../models/pessoa/mecanico.model';
import { AtualizarServico } from './../../../models/servico/atualizar-servico.model';
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
  displayedColumns: string[] = ['hora', 'carro', 'tipo', 'status',  'acoes'];
  private readonly STATUS = {
    AGENDADO: 1,
    INICIADO: 2,
    FINALIZADO: 3
  };

  constructor(private tokenService: TokenStorageService, private mecanicoService: MecanicoService, private router: Router) { }

  ngOnInit(): void {
    this.getServicos();
  }

  getServicos(): void {
    this.mecanicoService.getAgendaDia().subscribe({
      next: (servicos) => {
        this.servicos = servicos;
        this.isLoading = false;
      }
    })
  }

  getUsuarioLogado(): number{
   return this.tokenService.getUser().id;
  }

  retornaCarro(servico): string {
    const placa = servico.carro.placa;
    const marca = servico.carro.marca;
    const modelo = servico.carro.modelo;
    const ano = servico.carro.anoModelo;
    const retorno = `${placa} | ${marca}/${modelo} | ${ano}`
    return retorno;
  }

  retornaHora(servico: Servico) {
    const hora = servico.dataHora as unknown as string;
    const horaFormatada = hora.slice(11, 16)
    return horaFormatada + 'hs';
  }

  iniciarServico(servico: Servico) {
    const atualizarServico: AtualizarServico = {
      idServico: servico.id,
      idMecanico: this.getUsuarioLogado()
    }

    this.mecanicoService.iniciaServico(atualizarServico).subscribe({
      next: (sucess) => {
       location.reload();
      }
    })
  }

  finalizarServico(servico: Servico) {
    const atualizarServico: AtualizarServico = {
      idServico: servico.id,
      idMecanico: this.getUsuarioLogado()
    }

    this.mecanicoService.finalizarServico(atualizarServico).subscribe({
      next: (sucess) => {
        location.reload();
      }
    })
  }

  servicoPodeSerIniciado(servico) {
    return servico.status.id === this.STATUS.AGENDADO;
  }

  servicoPodeSerFinalizado(servico) {
    return servico.status.id === this.STATUS.INICIADO && this.getUsuarioLogado() === servico.mecanico.id;
  }

  mostrarTextoAcoes(servico) {
    return servico.status.id === this.STATUS.INICIADO && this.getUsuarioLogado() !== servico.mecanico.id;
  }

  retornaTextoAcoes(servico) {
    if(this.mostrarTextoAcoes(servico)) {
      return `Iniciado por ${servico.mecanico.username}`;
    }
  }

}
