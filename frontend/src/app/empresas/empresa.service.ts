import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Empresa } from './empresa';
    
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
    
  private apiURL = "http://localhost:8000/api/";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<Empresa[]> {
    return this.httpClient.get<Empresa[]>(this.apiURL + 'empresa')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(empresa: any): Observable<Empresa> {
    return this.httpClient.post<Empresa>(this.apiURL + 'empresa/', JSON.stringify(empresa), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id: number): Observable<Empresa> {
    return this.httpClient.get<Empresa>(this.apiURL + 'empresa/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id: number, empresa: any): Observable<Empresa> {
    return this.httpClient.put<Empresa>(this.apiURL + 'empresa/' + id, JSON.stringify(empresa), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id: number){
    return this.httpClient.delete<Empresa>(this.apiURL + 'empresa/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
   
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}