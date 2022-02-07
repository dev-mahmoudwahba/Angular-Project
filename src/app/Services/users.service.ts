import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Iuser } from '../Shared Classes and types/interfaces/Iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
_url:string = "https://jsonplaceholder.typicode.com/users"

  constructor(private http:HttpClient) { }
  getUsers():Observable<Iuser[]>{
  return this.http.get<Iuser[]>(this._url).pipe(catchError((err)=>{
    return throwError(()=>{
      err.message || "server error"
    })
  }))
  }

}
