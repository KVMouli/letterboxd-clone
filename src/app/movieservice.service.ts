import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, MovieResult, Movies} from './movies';




const baseURL = "https://api.themoviedb.org/3"
 const apikey = "eed5282d0cc71999fc12e622320a3821"
@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
  private http = inject(HttpClient);
  Movies!:Movies;


  constructor( ) { }

  getTrendingMovies():Observable<Movies>{ 
    return this.http.get<Movies>(`${baseURL}/trending/movie/week?api_key=${apikey}`)
  }

  getMovieDetails(id: string): Observable<MovieResult> {
    return this.http.get<MovieResult>(`${baseURL}/movie/${id}?api_key=${apikey}`);
  }
}
  

