import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CarroService } from './../../../_services/carro/carro.service';
import { ClienteService } from './../../../_services/cliente/cliente.service';
import { TokenStorageService } from './../../../_services/token/token-storage.service';
import { CadastrarCarro } from './../../../models/carro/cadastrar-carro.model';
import { MarcaCarro } from './../../../models/carro/marca-carro.model';
import { ModeloCarro } from './../../../models/carro/modelo-carro.model';

@Component({
  selector: 'app-cadastrar-carro',
  templateUrl: './cadastrar-carro.component.html',
  styleUrls: ['./cadastrar-carro.component.css']
})
export class CadastrarCarroComponent implements OnInit {

  form: FormGroup;
  isLoading = false;
  errorMessage = '';
  marcasCarro: Array<MarcaCarro> = [];
  modelosCarro: Array<ModeloCarro> = [];

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService, private tokenService: TokenStorageService, private carroService: CarroService) { }

  ngOnInit(): void {
    this.montaForm();
    this.carregaMarcas();
    this.monitoraSelectMarca();
  }

  carregaMarcas(): void {
    this.isLoading = true;
    this.carroService.getMarcas().subscribe({
        next: data => {
          this.marcasCarro = data;
          this.isLoading = false;
        }
    })
  }

  monitoraSelectMarca() {
    this.form.get('marca').valueChanges.subscribe({
      next: marca => {
        debugger;
        this.carregaModelos(marca.toString())
      }
    })
  }

  carregaModelos(marca: number): void {
    this.carroService.getModelosByMarca(marca).subscribe({
      next: data => {
        this.modelosCarro = data;
      }
    })
  }

  montaForm(): void {
    this.form = this.formBuilder.group({
      placa: new FormControl(null, [Validators.required]),
      anoModelo: new FormControl(null, [Validators.required]),
      codigoModeloCarro: new FormControl(null, [Validators.required]),
      marca: new FormControl(null)
    });
  }

  cadastrarCarro(): void {
    if (this.form.valid) {
      this.isLoading = true;
      const request = this.montaRequest();
      this.clienteService.cadastrarCarro(request).subscribe({
        next: (data) => {
          this.isLoading = false;
        }
    });

    }
  }

  montaRequest(): CadastrarCarro {
    const carro: CadastrarCarro = {
      anoModelo: this.form.get('anoModelo').value,
      codigoModeloCarro: this.form.get('codigoModeloCarro').value,
      placa: this.form.get('placa').value,
      codigoProprietario: this.retornarCodigoUsuarioLogado()
    }
    return carro;
  }

  retornarCodigoUsuarioLogado() {
    const user = this.tokenService.getUser();
    debugger;
    return user.id;
  }



}
