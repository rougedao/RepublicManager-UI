import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private url:string,private http:Http) {}

  getAll(){
    return this.http.get(this.url);
  }
  post(resource){
    return this.http.post(this.url,resource);
  }
  put(resource){
    return this.http.put(this.url+'/'+resource.Id,resource )
  }
  delete(resource){
    return this.http.delete(this.url+'/'+resource.Id)
  }


//   private handleError(error : Response){
//     if(error.status === 400)
//         return Observable.throw(new BadInput(error.json()));

//     if(error.status === 404)        
//         return Observable.throw(new NotFoundError());
    
//     return Observable.throw(new AppError(error));
// }
}
