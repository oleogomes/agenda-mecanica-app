import { CarroResponse } from './../../../models/carro/carro-response.model';
import { Carro } from './../../../models/carro/carro.model';
import { CarroService } from './../../../_services/carro/carro.service';
import { TokenStorageService } from './../../../_services/token/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.component.html',
  styleUrls: ['./lista-carros.component.css']
})
export class ListaCarrosComponent implements OnInit {

  carros: CarroResponse[];
  isLoading = true;
  displayedColumns: string[] = ['placa', 'marca', 'modelo', 'anoModelo'];

  constructor(private tokenService: TokenStorageService, private carroService: CarroService) { }

  ngOnInit(): void {
    this.getCarros();
  }

  getCarros(): void {
    this.carroService.getCarrosByPessoa(this.getUsuarioLogado()).subscribe({
      next: (carros) => {
        this.carros = carros;
        this.isLoading = false;
      }
    })
  }

  getUsuarioLogado(){
   return this.tokenService.getUser().id;
  }

}
