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

  ngOnInit(): void { //cuando mi componente se cree quiero llamar loadMovie
    this.loadMovies();
  }

  loadMovies(): void {
    this.tmdbService.getMovies(this.currentPage).subscribe((data: any) => {
      if(data && data.results){
        this.movies = data.results;
        console.log (data.results)
      }
      
    });
  }

  prevPage(): void {
    this.setPage(this.currentPage - 1 );
    }
  

  nextPage(): void {
      this.setPage(this.currentPage + 1 );
    
  }
  
  setPage(page:number){
    if (page >=1 && page <= this.movies.length){
      this.currentPage = page;
      this.loadMovies();
    }
  }

  getMoviesToDisplay(): Movie[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.movies/* .slice(startIndex, endIndex)*/;
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
