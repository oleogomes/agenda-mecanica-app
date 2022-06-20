import { Router } from '@angular/router';
import { AlertService } from './../../../core/_alert/alert.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CarroService } from './../../../_services/carro/carro.service';
import { ClienteService } from './../../../_services/cliente/cliente.service';
import { TokenStorageService } from './../../../_services/token/token-storage.service';
import { CadastrarCarro } from './../../../models/carro/cadastrar-carro.model';
import { MarcaCarro } from './../../../models/carro/marca-carro.model';
import { ModeloCarro } from './../../../models/carro/modelo-carro.model';
import { MASKS, NgBrazilValidators } from 'ng-brazil';

@Component({
  selector: 'app-cadastrar-carro',
  templateUrl: './cadastrar-carro.component.html',
  styleUrls: ['./cadastrar-carro.component.css']
})
export class CadastrarCarroComponent implements OnInit {

  form: FormGroup;
  isLoading = false;
  submitted = false;
  errorMessage = '';
  marcasCarro: Array<MarcaCarro> = [];
  modelosCarro: Array<ModeloCarro> = [];
  MASKS = MASKS;
  optionsAlert = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService, private tokenService: TokenStorageService,
     private carroService: CarroService, protected alertService: AlertService, private router: Router) { }

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
        this.carregaModelos(marca.toString());
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
      placa: new FormControl(null, [Validators.required, Validators.minLength(7)]),
      anoModelo: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      codigoModeloCarro: new FormControl(null, [Validators.required]),
      marca: new FormControl(null, [Validators.required])
    });
  }

  cadastrarCarro(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.isLoading = true;
      const request = this.montaRequest();
      this.clienteService.cadastrarCarro(request).subscribe(
        data => {
          this.isLoading = false;
          this.form.reset();
          this.alertService.success('Carro cadastrado com sucesso!', this.optionsAlert);
          this.router.navigateByUrl('cliente/carros');
        },
        err => {
          this.alertService.error('Ocorreu algum erro ao cadastrar o carro!', this.optionsAlert)
        }
      );
    } else {
      this.alertService.error('Revise os campos obrigatórios!', this.optionsAlert)
    }
  }

  montaRequest(): CadastrarCarro {
    const placa: string = this.form.get('placa').value
    const carro: CadastrarCarro = {
      anoModelo: this.form.get('anoModelo').value,
      codigoModeloCarro: this.form.get('codigoModeloCarro').value,
      placa: placa.toUpperCase(),
      codigoProprietario: this.retornarCodigoUsuarioLogado()
    }
    return carro;
  }

  retornarCodigoUsuarioLogado() {
    const user = this.tokenService.getUser();
    return user.id;
  }

  getErrorMessage(formControl: string): string {
    const control = this.form.get(formControl) as FormControl;
    if (control.hasError('required')) {
      return '*';
    }
    return control.hasError('minlength') ? `Mínimo de caracteres não atendido` : '';
  }

  validarCampos(formControl: string): boolean {
    return this.form.get(formControl).invalid && this.submitted;
  }

}
