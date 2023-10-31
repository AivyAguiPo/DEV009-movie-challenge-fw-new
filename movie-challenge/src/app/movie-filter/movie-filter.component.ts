import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TmdbApiService } from '../service-tmdb/tmdb-api.service'
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.sass']
})
export class MovieFilterComponent implements OnInit {
  @Input() genreOptions: any[] = [];
  @Input() sortOptions: any[] = [];
  @Output() applyFilters = new EventEmitter <any>();
  selectedGenre: string = '';
  selectedSort: string = '';
 

  ngOnInit() {
  }

  applyFilter(): void {
    this.applyFilters.emit({genreId : this.selectedGenre, sort: this.selectedSort});
   }




}
