import { LoaderModule } from './core/loader/loader.module';
import { PageContentComponent } from './core/page-content/page-content.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './core/_helpers/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule } from '@angular/material/input'
import { AdminEquipeComponent } from './features/admin/admin-equipe/admin-equipe.component';
import { ListaEquipeComponent } from './features/admin/admin-equipe/lista-equipe/lista-equipe.component';
import { ListaClientesComponent } from './features/admin/lista-clientes/lista-clientes.component';
import { AdminServicosComponent } from './features/admin/admin-servicos/admin-servicos.component';
import { CadastrarCarroComponent } from './features/cliente/cadastrar-carro/cadastrar-carro.component';
import { LoaderComponent } from './core/loader/loader.component';
import { MatSelectModule } from '@angular/material/select';

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
    AdminEquipeComponent,
    ListaEquipeComponent,
    ListaClientesComponent,
    PageContentComponent,
    AdminServicosComponent,
    CadastrarCarroComponent
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
    MatSelectModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
