import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Shared Classes and types/classes/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
_url:string= "http://localhost:3000/register"
  register(user:User){
    return this.http.post(this._url ,user)
  }

}
