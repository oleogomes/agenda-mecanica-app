import { CadastrarMecanicoComponent } from './features/admin/admin-equipe/cadastrar-mecanico/cadastrar-mecanico.component';
import { AlertComponent } from './core/_alert/alert.component';
import { AlertModule } from './core/_alert/alert.module'
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextMaskModule } from 'angular2-text-mask';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { authInterceptorProviders } from './core/_helpers/auth.interceptor';
import { LoaderModule } from './core/loader/loader.module';
import { PageContentComponent } from './core/page-content/page-content.component';
import { ListaEquipeComponent } from './features/admin/admin-equipe/lista-equipe/lista-equipe.component';
import { NovoTipoServicoComponent } from './features/admin/novo-tipo-servico/novo-tipo-servico.component';
import { ListaClientesComponent } from './features/admin/lista-clientes/lista-clientes.component';
import { AgendarServicoComponent } from './features/cliente/agendar-servico/agendar-servico.component';
import { CadastrarCarroComponent } from './features/cliente/cadastrar-carro/cadastrar-carro.component';
import { ListaCarrosComponent } from './features/cliente/lista-carros/lista-carros.component';
import { ServicosClienteComponent } from './features/cliente/servicos-cliente/servicos-cliente.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { MecanicoAgendaComponent } from './features/mecanico/mecanico-agenda/mecanico-agenda.component';
import { NgBrazil } from 'ng-brazil';
import { ServicosAdminComponent } from './features/admin/servicos-admin/servicos-admin.component';
import { TiposServicoComponent } from './features/admin/tipos-servico/tipos-servico.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    CadastrarMecanicoComponent,
    ListaEquipeComponent,
    ListaClientesComponent,
    PageContentComponent,
    NovoTipoServicoComponent,
    CadastrarCarroComponent,
    ListaCarrosComponent,
    AgendarServicoComponent,
    ServicosClienteComponent,
    MecanicoAgendaComponent,
    ServicosAdminComponent,
    TiposServicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    LoaderModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TextMaskModule,
    NgBrazil,
    AlertModule
  ],
  providers: [authInterceptorProviders, MatDatepickerModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
