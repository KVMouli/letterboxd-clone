import { Component, OnInit, inject } from '@angular/core';
import { Movie } from '../../movies';
import { MovieserviceService } from '../../movieservice.service';

@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css'
})
export class EntryComponent implements OnInit {


  private movieservice = inject(MovieserviceService)

  constructor() {
    // this.loadMovies();
    // this.trendingMovies();
  }
  ngOnInit() {
    this.trendingMovies();
  }
  trendingMovies() {
    this.movieservice.getTrendingMovies().subscribe((result) => {
      console.log(result);
    });
  }

  loadMovies() {
    this.movieservice.getMovieDetails('572802').subscribe((movies) => {
      console.log(movies);
      //  this.movieservice.getTrendingMovies().subscribe((result)=>{
      //   console.log(result);
    })
  }
}
