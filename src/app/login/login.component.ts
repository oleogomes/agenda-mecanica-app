import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import { TokenStorageService } from '../_services/token/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  ROLE = {
    CLIENTE: 'ROLE_CLIENTE',
    MECANICO: 'ROLE_MECANICO',
    ADMIN: 'ROLE_ADMIN',
  }


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.redirectConformeRoles();
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
        this.redirectConformeRoles();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  redirectConformeRoles() {
    switch (this.roles[0]) {
      case this.ROLE.ADMIN:
        this.router.navigateByUrl('/admin/servicos');
        break;
      case this.ROLE.CLIENTE:
        this.router.navigateByUrl('/cliente/servicos/agendar');
        break;
      case this.ROLE.MECANICO:
        this.router.navigateByUrl('/mecanico/agenda');
        break;
      default:
        break;
    }
  }

}
