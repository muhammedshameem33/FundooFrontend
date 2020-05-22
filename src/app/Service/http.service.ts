import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private http:HttpClient) { }

  public post(data:object,path:string ){
    return this.http.post(environment.baseUrl+path,data);

}

public get(path: string){
  return this.http.get(environment.baseUrl+path);
}

public put(path:string,data){
  return this.http.put(environment.baseUrl+path,data);
}
}
