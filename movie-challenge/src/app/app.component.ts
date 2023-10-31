import { Component } from '@angular/core';
import { TmdbApiService } from './service-tmdb/tmdb-api.service';

@Component({
  selector: 'app-root', //index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'movie-challenge';
  genreOptions: any[] = []; // Almacena las opciones de género
  sortOptions: any[] = [];
   movies: any[] = [];
  itemsPerPage = 10;
  currentPage = 1;
  constructor(private tmdbService: TmdbApiService) {
  }

  ngOnInit() {
    this.getGeners();
    this.getSorts();
    this.getMovies('');
  }

  getSorts(){
  this.sortOptions = ['asc', 'desc']
  }

  applyFilter(params : any){
    this.getMovies(params.genreId);
  }

  getMovies(genreId: string){
    this.tmdbService.getMovies(this.currentPage,genreId).subscribe((data: any) => {
      if(data && data.results){
        this.movies = data.results;
        console.log (data.results)
      }
      
    });
  }

  getGeners(): void {
    this.tmdbService.getMovieGenres().subscribe((data: any) => {
      if (data && data.genres) {
        this.genreOptions = data.genres;
      }
    });
  }
}
