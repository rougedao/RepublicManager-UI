import { NotFoundError } from './../models/error classes/not-found-error';
import { AppError } from './../models/error classes/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { BadInput } from '../models/error classes/bad-input';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private url: string, private http: Http) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(
        catchError(this.handleError));
  }
  getById(Id) {
    return this.http.get(this.url + '/' + Id)
      .pipe(
        catchError(this.handleError));
  }
  post(resource) {
    return this.http.post(this.url, resource)
      .pipe(
        catchError(this.handleError));
  }
  put(resource) {
    return this.http.put(this.url + '/' + resource.Id, resource)
      .pipe(
        catchError(this.handleError));
  }
  delete(resource) {
    return this.http.delete(this.url + '/' + resource.Id)
      .pipe(
        catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return throwError(new BadInput(error.json()));

    if (error.status === 404)
      return throwError(new NotFoundError());

    return throwError(new AppError(error));
  }
}