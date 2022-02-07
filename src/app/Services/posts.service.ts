import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Ipost } from '../Shared Classes and types/interfaces/Ipost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
  _url:string = "https://jsonplaceholder.typicode.com/posts";

    getPosts():Observable<Ipost[]>{
      return this.http.get<Ipost[]>(this._url).pipe(catchError((err)=>{
        return throwError(()=>{
          err.message || "server error"
        })
      }))
    }





}
