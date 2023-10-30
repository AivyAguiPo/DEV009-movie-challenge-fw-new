import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from '../service-tmdb/tmdb-api.service'
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.sass']
})
export class MovieFilterComponent implements OnInit {
  movie:  Movie[] = [];
  currentPage: number = 1;
  genreOptions: any[] = []; // Almacena las opciones de género
  sortOptions: any[] = []; // Almacena las opciones de ordenamiento
  selectedGenre: string = '';
  selectedSort: string = '';

  genreMapping: { [key: string]: number } = {
    "Acción": 28,
    "Drama": 18,
    "Animation": 16,
    "Comedy": 35,
    "Fantasy": 14,
    "Romance": 10749,
    // Agrega otros géneros aquí
  };
  
  constructor(private tmdbService: TmdbApiService) {  
    const list = [{id:28, name:"Acción"}]
    this.genreOptions = list; // Inicializa genreOptions aquí
}

  ngOnInit() {
    this.applyFilter();
  }

apllyFilters():void{
  
}
  
  applyFilter(): void {
    // Llama al servicio TmdbApiService para obtener la lista completa de películas
    this.tmdbService.getMovieGenres().subscribe((data: any) => {
      if (data && data.results) {
        let filteredMovies = data.results; // Inicialmente, todas las películas se muestran
        console.log(filteredMovies)
        // Verifica si se ha seleccionado un género
        if (this.selectedGenre) {
          // Filtra las películas por género
          const selectedGenreId = this.genreMapping[this.selectedGenre];
          console.log(selectedGenreId)
          if (selectedGenreId) {
            filteredMovies = filteredMovies.filter((movie: Movie) => {
              return movie.genre_ids.includes(selectedGenreId);
          });
        }
      }
        // Verifica si se ha seleccionado una opción de ordenamiento
        if (this.selectedSort) {
          if (this.selectedSort === 'popularidad') {
            // Ordena las películas por popularidad en orden descendente
            filteredMovies.sort((a: Movie, b: Movie) => b.popularity - a.popularity);
          } else if (this.selectedSort === 'calificacion') {
            // Ordena las películas por calificación en orden descendente
            filteredMovies.sort((a: Movie, b: Movie) => b.vote_average - a.vote_average);
          }
        }

        // Actualiza la lista de películas con los filtros y ordenamientos aplicados
        this.movie = filteredMovies;
      }
    });
  }
}
