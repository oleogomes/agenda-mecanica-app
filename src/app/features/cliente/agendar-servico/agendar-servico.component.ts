import { AlertService } from './../../../core/_alert/alert.service';
import { Router } from '@angular/router';
import { AgendarServico } from './../../../models/servico/agendar-servico.model';
import { TokenStorageService } from './../../../_services/token/token-storage.service';
import { CarroResponse } from './../../../models/carro/carro-response.model';
import { TipoServico } from './../../../models/servico/tipo-servico.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicoService } from './../../../_services/servico/servico.service';
import { CarroService } from './../../../_services/carro/carro.service';
import { ClienteService } from './../../../_services/cliente/cliente.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-agendar-servico',
  templateUrl: './agendar-servico.component.html',
  styleUrls: ['./agendar-servico.component.css']
})
export class AgendarServicoComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  carrosGet = false;
  tiposServico: TipoServico[];
  carrosCliente: CarroResponse[];
  optionsAlert = {
    autoClose: true,
    keepAfterRouteChange: true
  };
  horas = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
  ];
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  constructor(private clienteService: ClienteService, private carroService: CarroService, private router: Router, protected alertService: AlertService,
    private servicoService: ServicoService, private formBuilder: FormBuilder, private tokenService: TokenStorageService ) { }

  ngOnInit(): void {
    this.getTiposServico();
    this.getCarrosCliente();
    this.iniciaForm();
  }

  iniciaForm() {
    this.form = this.formBuilder.group({
      idCarro: new FormControl(null, [Validators.required]),
      idTipoServico: new FormControl(null, [Validators.required]),
      hora: new FormControl(null, [Validators.required]),
      data: new FormControl(null, [Validators.required]),
    });
  }

  getTiposServico() {
    this.servicoService.getTiposServico().subscribe({
      next: (tipos) => {
        this.tiposServico = tipos;
      }
    })
  }

  getCarrosCliente() {
    const cliente = this.tokenService.getUser();
    this.carroService.getCarrosByPessoa(cliente.id).subscribe({
      next: (carros) => {
        this.carrosGet = true;
        this.carrosCliente = carros;
      }
    })
  }

  montaRequest(): AgendarServico {
    const cliente = this.tokenService.getUser();

    const servico: AgendarServico = {
      idCarro: this.form.get('idCarro')?.value,
      idCliente: cliente.id,
      idTipoServico: this.form.get('idTipoServico')?.value,
      datahora: this.formataDataHora()
    }
    return servico;
  }

  agendarServico() {
    this.submitted = true;
    if(this.form.valid) {
      const servico = this.montaRequest();
      this.clienteService.agendarServico(servico).subscribe(
        (data) => {
          this.alertService.success('Serviço agendado com sucesso!', this.optionsAlert);
          this.router.navigateByUrl('/cliente/servicos/listar');
        },
        (err) => {
          this.alertService.error('Ocorreu algum erro ao agendar o serviço!', this.optionsAlert)
        }

      )
    } else {
      this.alertService.error('Revise os campos obrigatórios!', this.optionsAlert)
    }
  }

  formataDataHora(): string {
    const data = this.formataData();
    const hora = this.form.get('hora').value;
    return data + ' ' + hora
  }

  formataData(): string {
    const data = this.form.get('data')?.value;
    const dataFormatada = moment(data).parseZone() .format('L');
    const dataSeparada : string[] = dataFormatada.split('/');
    const dataUs = `${dataSeparada[2]}-${dataSeparada[1]}-${dataSeparada[0]}`
    return dataUs;
  }

  formataMes(mes: number) {
    mes = mes + 1;
    if(mes >=10 ) {
     return mes.toString();
    } else {
      return '0'+ mes.toString()
    }
  }

  formataDia(dia: number) {
    if(dia>= 10) {
      return dia.toString();
     } else {
       return '0'+ dia.toString()
     }
  }

  validarCampos(formControl: string): boolean {
    return this.form.get(formControl).invalid && this.submitted;
  }

  nenhumCarroCadastrado(): boolean {
    return this.carrosGet && this.carrosCliente.length === 0;
  }

}
