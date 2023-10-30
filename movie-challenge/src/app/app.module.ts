import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';




import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TmdbApiService } from './service-tmdb/tmdb-api.service';
import { MovieFilterComponent } from './movie-filter/movie-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    TmdbApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
