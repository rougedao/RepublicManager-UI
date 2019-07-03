import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './../services/authentication.service';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { decode } from 'punycode';


@Injectable()
export class RoleGuard implements CanActivate {
    constructor(public auth: AuthGuard, public router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const expectedRole = route.data.expectedRole;
        const token = localStorage.getItem('jwt');
        const tokenPayload = decode(token);

        if (!this.auth.canActivate() || tokenPayload.role !== expectedRole) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
