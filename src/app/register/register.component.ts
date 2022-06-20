import { Router } from '@angular/router';
import { AlertService } from './../core/_alert/alert.service';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  optionsAlert = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  @Input()
  role: string = 'ROLE_CLIENTE';

  constructor(private authService: AuthService, protected alertService: AlertService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.form.roles = [this.role];
    this.authService.register(this.form).subscribe(
      data => {
        if(this.cadastroCliente()) {
          this.alertService.success('Registro realizado com sucesso, faça login agora mesmo!', this.optionsAlert);
          this.router.navigateByUrl('/login');
        } else {
          this.alertService.success('Registro realizado com sucesso!', this.optionsAlert);
          this.router.navigateByUrl('/admin/equipe')
        }
      },
      err => {
        this.alertService.error(err.error.message, this.optionsAlert);
      }
    );
  }

  cadastroCliente(): boolean {
    return this.role === 'ROLE_CLIENTE';
  }

  returnTituloCadastro(): string {
    return this.cadastroCliente() ? 'Cadastro' : 'Novo mecânico';
  }

}
