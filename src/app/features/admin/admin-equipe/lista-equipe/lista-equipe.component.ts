import { Router } from '@angular/router';
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
  displayedColumns: string[] = ['id', 'nome', 'username', 'servicos'];

  constructor(private service: AdminService, private router: Router ) { }

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

  redirectCadastroMecancico() {
    this.router.navigateByUrl('/admin/novo-mecanico');
  }

}
