//define la navegacion de la pagina -enrutamiento
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  { 
    path: 'movies', 
  component: MovieListComponent 
  },
  {
    path: '**', 
    pathMatch: 'full',
    redirectTo: 'movies'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
