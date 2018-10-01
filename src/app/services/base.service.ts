import { NotAuthorizedError } from './../models/error classes/not-authorized-error';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NotFoundError } from './../models/error classes/not-found-error';
import { AppError } from './../models/error classes/app-error';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BadInput } from '../models/error classes/bad-input';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private url: string, private http: HttpClient) { }

  getById(Id) {
    const token = localStorage.getItem('jwt');
    return this.http.get(this.url + '/' + Id, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    }).pipe(
      map(response => response),
      catchError(this.handleError));
  }
  post(resource) {
    const token = localStorage.getItem('jwt');
    return this.http.post(this.url, resource, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    }).pipe(
      map(response => response),
      catchError(this.handleError));
  }
  put(resource) {
    const token = localStorage.getItem('jwt');
    return this.http.put(this.url + '/' + resource.Id, resource, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    }).pipe(
      map(response => response),
      catchError(this.handleError));
  }
  delete(resource) {
    const token = localStorage.getItem('jwt');
    return this.http.delete(this.url + '/' + resource.Id, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    }).pipe(
      map(response => response),
      catchError(this.handleError));
  }
  private handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadInput(error));
    }
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    if (error.status === 501) {
      return throwError(new NotAuthorizedError());
    }
    return throwError(new AppError(error));
  }
}
