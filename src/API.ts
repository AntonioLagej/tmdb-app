
import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
} from './config';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};
export type Movie={
  backdrop_path:string;
  id:number;
  original_title:string;
  title:string;
  vote_average:number;
  popularity:number;
  overview:string;
  poster_path:string;
  vote_count:number;
  budget:number;
  runtime:number;
  revenue:number;
}

export type Movies={
  page:number;
  results:Movie[];
  total_pages:number;
  total_results:number;

}
export type Cast ={
character:string;
credit_id:string;
name:string;
profile_path:string

}

export type Crew ={
  job:string;
  credit_id:string;
  name:string;
  
  }
export type Credits={
id:number;
cast:Cast[];
crew: Crew[];

}

const apiSettings = {
  fetchMovies: async (searchTerm:string, page:number) :Promise<Movies> => {
    const endpoint:string = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId:number):Promise<Movie> => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=pt-BR`;
    return await (await fetch(endpoint)).json();
  },
  fetchCredits: async  (movieId:number):Promise<Credits> => {
    const creditsEndpoint :string= `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=pt-BR`;
    return await (await fetch(creditsEndpoint)).json();
  },
  
};

export default apiSettings;
