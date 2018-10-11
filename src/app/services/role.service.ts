import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends BaseService {
  constructor(http: HttpClient) {
    const apiUrl = 'http://localhost:61209/api/role';
    super(apiUrl, http);
  }
}
