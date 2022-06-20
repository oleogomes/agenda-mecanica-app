import { TipoServico } from './../../../models/servico/tipo-servico.model';
import { Servico } from './../../../models/servico/servico.model';
import { ServicoService } from './../../../_services/servico/servico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipos-servico',
  templateUrl: './tipos-servico.component.html',
  styleUrls: ['./tipos-servico.component.css']
})
export class TiposServicoComponent implements OnInit {

  servicos: TipoServico[];
  isLoading = true;
  displayedColumns: string[] = ['codigo', 'descricao', 'tempo', 'valor'];

  constructor(private servicosService: ServicoService) { }

  ngOnInit(): void {
    this.getServicos();
  }

  getServicos(): void {
    this.servicosService.getTiposServico().subscribe({
      next: (servicos) => {
        this.servicos = servicos;
        this.isLoading = false;
      }
    })
  }

  retornaTempo(tempo: number): string {
    return tempo === 1 ? '1 hora' : `${tempo} horas`
  }

}
