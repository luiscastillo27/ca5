import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor( private _auth:AuthService ) {
    this._auth.handleAuthentication();
  }

  ngOnInit() {

  }

  public iniciarSesion(){
    this._auth.login();
  }

  public cerrarSesion(){
    this._auth.logout();
  }

}
