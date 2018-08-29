import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{
    handleError(error){
      error =>{
        alert("Não foi possível criar um novo usuário"); 
      }
    }
}