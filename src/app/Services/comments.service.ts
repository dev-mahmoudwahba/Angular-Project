import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError, Observable } from 'rxjs';
import { Icomment } from '../Shared Classes and types/interfaces/Icomment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }

  getcomment(id:number):Observable<Icomment[]>{
   return this.http.get<Icomment[]>(`https://jsonplaceholder.typicode.com/comments/${id}`).pipe(catchError((err) => {
      return throwError(() => {
        err.message || "server error"
      })
    }))
  }











}
