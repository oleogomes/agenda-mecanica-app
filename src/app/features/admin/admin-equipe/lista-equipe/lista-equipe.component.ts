import { AdminService } from './../../../../_services/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { Mecanico } from 'src/app/models/pessoa/mecanico.model';

@Component({
  selector: 'app-lista-equipe',
  templateUrl: './lista-equipe.component.html',
  styleUrls: ['./lista-equipe.component.css']
})
export class ListaEquipeComponent implements OnInit {

  equipe: Mecanico[];
  isLoading = true;
  displayedColumns: string[] = ['id', 'username', 'nome', 'servicos'];

  constructor(private service: AdminService ) { }

  ngOnInit(): void {
    this.carregaEquipe();
  }

  carregaEquipe() {
   this.service.getMecanicos().subscribe({
      next: data => {
        this.equipe = data;
        this.isLoading = false;
      }
    })
  }

}
