import { TokenStorageService } from './../_services/token/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioLogado = false;
  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()) {
      this.usuarioLogado = true;
    }
  }

}
