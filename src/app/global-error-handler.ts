import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
      // tslint:disable-next-line:no-unused-expression
      error => {
        alert('Ocorreu um erro ao realizar essa operação');
        console.log(error);
      };
    }
}
