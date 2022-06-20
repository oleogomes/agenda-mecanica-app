import { TiposServicoComponent } from './features/admin/tipos-servico/tipos-servico.component';
import { ServicosAdminComponent } from './features/admin/servicos-admin/servicos-admin.component';
import { ListaClientesComponent } from './features/admin/lista-clientes/lista-clientes.component';
import { CadastrarMecanicoComponent } from './features/admin/admin-equipe/cadastrar-mecanico/cadastrar-mecanico.component';
import { ListaEquipeComponent } from './features/admin/admin-equipe/lista-equipe/lista-equipe.component';
import { MecanicoAgendaComponent } from './features/mecanico/mecanico-agenda/mecanico-agenda.component';
import { ServicosClienteComponent } from './features/cliente/servicos-cliente/servicos-cliente.component';
import { AgendarServicoComponent } from './features/cliente/agendar-servico/agendar-servico.component';
import { ListaCarrosComponent } from './features/cliente/lista-carros/lista-carros.component';
import { CadastrarCarroComponent } from './features/cliente/cadastrar-carro/cadastrar-carro.component';
import { NovoTipoServicoComponent } from './features/admin/novo-tipo-servico/novo-tipo-servico.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'admin/novo-mecanico', component: CadastrarMecanicoComponent},
  { path: 'admin/equipe', component: ListaEquipeComponent},
  { path: 'admin/servicos', component: ServicosAdminComponent},
  { path: 'admin/novo-servico', component: NovoTipoServicoComponent},
  { path: 'admin/tipos-servico', component: TiposServicoComponent},
  { path: 'admin/clientes', component: ListaClientesComponent},
  { path: 'cliente/novo-carro', component: CadastrarCarroComponent},
  { path: 'cliente/carros', component: ListaCarrosComponent},
  { path: 'cliente/servicos/agendar', component: AgendarServicoComponent},
  { path: 'cliente/servicos/listar', component: ServicosClienteComponent},
  { path: 'mecanico/agenda', component: MecanicoAgendaComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
