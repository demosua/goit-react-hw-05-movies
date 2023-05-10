import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '1315643545b87f640bd81c2c08cb68dd';

async function getTrendingMovies() {
    try {
      const url = `trending/movie/day?api_key=${API_KEY}`;
      const response = await axios.get(url);
      if (response) {return response.data.results;}
        return Promise.reject(new Error(`There are no results for trending movies`));
    } catch (error) {
      return error;
    }
}

async function getMoviesSearch(movie) {
  try {
    const url = `search/movie?api_key=${API_KEY}&language=en-US&query=${movie}&page=1&include_adult=false`;
    const response = await axios.get(url);
    if (response) {return response.data.results;}
      return Promise.reject(new Error(`There are no results for movie you are searching for`));
  } catch (error) {
    return error;
  }
}

async function getMovieDetails(movie_id) {
  try {
    const url = `movie/${movie_id}?api_key=${API_KEY}`;
    const response = await axios.get(url);
    if (response) {return response.data;}
      return Promise.reject(new Error(`There are no results for trending movies`));
  } catch (error) {
    return error;
  }
}

async function getMovieCredits(movie_id) {
  try {
    const url = `movie/${movie_id}/credits?api_key=${API_KEY}`;
    const response = await axios.get(url);
    if (response) {return response.data;}
      return Promise.reject(new Error(`There are no results for trending movies`));
  } catch (error) {
    return error;
  }
}

async function getMovieReviews(movie_id) {
  try {
    const url = `movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await axios.get(url);
    if (response) {return response.data.results;}
      return Promise.reject(new Error(`There are no results for trending movies`));
  } catch (error) {
    return error;
  }
}

const api = {
  getTrendingMovies,
  getMoviesSearch,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};

export default api;