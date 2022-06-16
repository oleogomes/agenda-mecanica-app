

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-equipe',
  templateUrl: './admin-equipe.component.html',
  styleUrls: ['./admin-equipe.component.css']
})
export class AdminEquipeComponent implements OnInit {
  mostrarForm = false;
  constructor() { }

  ngOnInit(): void {
  }

  cadastrarMecanico() {
    debugger;
    this.mostrarForm = true;
  }

}
