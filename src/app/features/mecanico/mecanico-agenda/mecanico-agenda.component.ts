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

  constructor(private tokenService: TokenStorageService, private mecanicoService: MecanicoService) { }

  ngOnInit(): void {
    this.getServicos();
  }

  getServicos(): void {
    this.mecanicoService.getAgendaDia().subscribe({
      next: (servicos) => {
        this.servicos = servicos;
        debugger;
        this.isLoading = false;
      }
    })
  }

  getUsuarioLogado(): number{
   return this.tokenService.getUser().id;
  }

  retornaCarro(servico: Servico) {
    return servico.carro.placa + ' - ' + servico.carro.modelo.marcaCarro.descricao + '/' + servico.carro.modelo.descricao + ' ' + servico.carro.anoModelo;
  }

  retornaHora(servico: Servico) {
    return servico.dataHora.getTime();
  }

  retornaServico(servico: Servico) {
    return servico.tipoServico.descricao;
  }

  retonarStatus(servico: Servico) {
    return servico.status.descricao;
  }

  iniciaServico(servico: Servico) {
    const atualizarServico: AtualizarServico = {
      id: servico.id,
      idMecanico: this.getUsuarioLogado()
    }
    debugger;
  }

}
