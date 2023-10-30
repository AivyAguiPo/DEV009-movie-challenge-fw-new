//define el modelo de datos de la película en forma de una interfaz 
export interface Movie {
  poster_path: string;
  original_title: string;
  release_date: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  }