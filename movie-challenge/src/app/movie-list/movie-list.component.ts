import { Component,OnInit } from '@angular/core';
import { TmdbApiService } from '../service-tmdb/tmdb-api.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit{
  movies: Movie[] = [];
  itemsPerPage = 10;
  currentPage = 1;

  constructor(private tmdbService: TmdbApiService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.tmdbService.getMovies(this.currentPage).subscribe(data => {
      this.movies = data.results;
      console.log (data.results)
    });
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadMovies();
    }
  }

  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.movies.length) {
      this.currentPage++;
      this.loadMovies();
    }
  }

  getMoviesToDisplay(): Movie[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.movies.slice(startIndex, endIndex);
  }

  // Método para obtener la URL completa del póster de la película
  getMoviePosterUrl(posterPath: string): string {
    if (posterPath) {
      return `https://image.tmdb.org/t/p/w185${posterPath}`;
    } else {
      return 'assets/placeholder-poster.png'; // URL de un póster de reemplazo
    }
  }
}
