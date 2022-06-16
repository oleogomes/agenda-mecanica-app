import { TipoServico } from './../../../models/servico/tipo-servico.model';
import { AdminService } from './../../../_services/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-servicos',
  templateUrl: './admin-servicos.component.html',
  styleUrls: ['./admin-servicos.component.css']
})
export class AdminServicosComponent implements OnInit {

  form: FormGroup;

  constructor( private formBuilder: FormBuilder, private adminService: AdminService) { }

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
   if(this.form.valid) {
    debugger;
    const request = this.montaRequest();
      this.adminService.cadastrarTipoServico(request).subscribe({
        next:
        success => {
          alert('cadastrou com sucesso')
          this.form.reset();
        }
      })
   }
  }

  montaRequest(): TipoServico {
    const tipoServico: TipoServico = {
      descricao: this.form.get('descricao').value,
      tempo: this.form.get('tempoServico').value,
      valor: this.form.get('valor').value,
    }
    return tipoServico;
  }



}
