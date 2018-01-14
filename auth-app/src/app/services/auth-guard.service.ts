import { Injectable } from '@angular/core';
import { Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor( private _auth:AuthService ) { }

  public canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ){

    console.log(next);
    if( this._auth.isAuthenticated() ){
        console.log("paso el grud");
        return true;
    } else {
        console.error("Bloqueado por el grad");
        return false;
    }

  }

}
