import { Injectable } from '@angular/core';

declare var Auth0Lock: any;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  lock = new Auth0Lock('zQOuHaLIoiYYdMD2eB5NUGvqSuNiP6Fg','republicamanager.auth0.com',{})
  constructor() {
    this.lock.on('authenticated',authResult => {
      localStorage.setItem('id_token',authResult.idToken)
    });
   }
}
