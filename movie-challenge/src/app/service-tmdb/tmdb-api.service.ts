import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {
  private apiKey = '1d43fb585c0f6541520f5ec3566ed004';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  //obtener lista de peliculas
  getMovies(page:number): Observable<any> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('page', page.toString()); // Agrega la paginación

    return this.http.get(`${this.apiUrl}/discover/movie`, { params });
  }
}