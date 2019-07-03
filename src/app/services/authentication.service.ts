import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {
  constructor(http: HttpClient, private jwt: JwtHelperService, private router: Router) {
    super('http://localhost:61209/api/login', http);
  }
  currentUserRoles() {
    const decodedToken = this.jwt.decodeToken(localStorage.getItem('jwt'));
    const roles: string = decodedToken.Role;
    return roles;
  }

  // tslint:disable-next-line:member-ordering
  logOut() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }
}
