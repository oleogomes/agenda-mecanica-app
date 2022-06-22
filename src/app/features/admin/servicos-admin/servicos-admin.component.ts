import { AdminService } from './../../../_services/admin/admin.service';
import { TokenStorageService } from './../../../_services/token/token-storage.service';
import { Servico } from './../../../models/servico/servico.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos-admin',
  templateUrl: './servicos-admin.component.html',
  styleUrls: ['./servicos-admin.component.css']
})
export class ServicosAdminComponent implements OnInit {

  servicos: Servico[];
  isLoading = true;
  displayedColumns: string[] = ['dataHora', 'placa', 'carro', 'tipo', 'valor', 'status', 'mecanico'];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getServicos();
  }

  getServicos(): void {
    this.adminService.getServicos().subscribe({
      next: (servicos) => {
        this.servicos = servicos;
        this.isLoading = false;
      }
    })
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
