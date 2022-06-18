import { ServicosClienteComponent } from './features/cliente/servicos-cliente/servicos-cliente.component';
import { AgendarServicoComponent } from './features/cliente/agendar-servico/agendar-servico.component';
import { ListaCarrosComponent } from './features/cliente/lista-carros/lista-carros.component';
import { CadastrarCarroComponent } from './features/cliente/cadastrar-carro/cadastrar-carro.component';
import { AdminServicosComponent } from './features/admin/admin-servicos/admin-servicos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AdminEquipeComponent } from './features/admin/admin-equipe/admin-equipe.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'admin/equipe', component: AdminEquipeComponent},
  { path: 'admin/servicos', component: AdminServicosComponent},
  { path: 'cliente/novo-carro', component: CadastrarCarroComponent},
  { path: 'cliente/carros', component: ListaCarrosComponent},
  { path: 'cliente/servicos/agendar', component: AgendarServicoComponent},
  { path: 'cliente/servicos/listar', component: ServicosClienteComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
