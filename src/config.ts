// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL:string = 'https://api.themoviedb.org/3/';
const API_KEY:string|undefined = "d27ba532bec97a1cc5c937d829038a0f";

const SEARCH_BASE_URL:string = `${API_URL}search/movie?api_key=${API_KEY}&language=pt-BR&query=`;
const POPULAR_BASE_URL:string = `${API_URL}movie/popular?api_key=${API_KEY}&language=pt-BR`;


const IMAGE_BASE_URL:string = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE:string = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE:string = 'w780';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
