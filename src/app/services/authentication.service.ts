import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {
  constructor(http: HttpClient) {
    const apiUrl = 'http://localhost:61209/api/login';
    super(apiUrl, http);
  }
}
