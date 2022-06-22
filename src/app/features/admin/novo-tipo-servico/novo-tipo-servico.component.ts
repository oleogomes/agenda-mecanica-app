import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AdminService } from '../../../_services/admin/admin.service';
import { AlertService } from '../../../core/_alert';
import { TipoServico } from '../../../models/servico/tipo-servico.model';
import { MASKS } from 'ng-brazil';

@Component({
  selector: 'novo-tipo-servico',
  templateUrl: './novo-tipo-servico.component.html',
  styleUrls: ['./novo-tipo-servico.component.css']
})
export class NovoTipoServicoComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  optionsAlert = {
    autoClose: true,
    keepAfterRouteChange: true
  };
  MASKS = MASKS;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService,
    protected alertService: AlertService, private router: Router) { }

  ngOnInit(): void {
    this.montaForm();
  }

  montaForm(): void {
    this.form = this.formBuilder.group({
      descricao: new FormControl(null, [Validators.required]),
      tempoServico: new FormControl(null, [Validators.required]),
      valor: new FormControl(null, [Validators.required])
    });
  }

  cadastrarServico() {
    this.submitted = true;;
    if (this.form.valid) {
      const request = this.montaRequest();
      this.adminService.cadastrarTipoServico(request).subscribe(
        data => {
        this.alertService.success('Serviço cadastrado com sucesso!', this.optionsAlert)
        this.router.navigateByUrl('/admin/tipos-servico')
        this.submitted = false;
      },
        err => {
          this.alertService.error('Ocorreu algum erro ao cadastrar o serviço!', this.optionsAlert)
        }
      )
    } else {
      this.alertService.error('Revise os campos obrigatórios!')
    }
  }

  montaRequest(): TipoServico {
    const tipoServico: TipoServico = {
      descricao: this.form.get('descricao').value,
      tempo: this.form.get('tempoServico').value,
      valor: this.formataValor(this.form.get('valor').value),
    }
    return tipoServico;
  }

  validarCampos(formControl: string): boolean {
    return this.form.get(formControl).invalid && this.submitted;
  }

  formataValor(valor: string): number {
    const valorSemCifrao = valor.replace('R$ ', '');
    const valorNumber = Number.parseInt(valorSemCifrao);
    return valorNumber;
  }


}
