import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private apiUrl = `http://localhost:8080/livro`;

  constructor(private http: HttpClient) { }

  public buscaLivros(titulo: string): Observable<any> {    
    return this.http.get(`${this.apiUrl}?name=${titulo}`)
        .pipe(map(data => data));
  } 
}
