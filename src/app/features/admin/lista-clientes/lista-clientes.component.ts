import { Component, OnInit } from '@angular/core';

import { AdminService } from './../../../_services/admin/admin.service';
import { Cliente } from './../../../models/pessoa/cliente.model';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes: Cliente[];
  isLoading = true;
  displayedColumns: string[] = ['id', 'nome', 'email', 'servicos'];

  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.carregaClientes();
  }

  carregaClientes() {
   this.service.getClientes().subscribe({
      next: data => {
        this.clientes = data;
        this.isLoading = false;
      }
    })
  }

}
