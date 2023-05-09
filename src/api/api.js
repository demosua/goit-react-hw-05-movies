import axios from "axios";

async function getTrendingMovies() {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=1315643545b87f640bd81c2c08cb68dd');
      if (response) {return response.data.results;}
        return Promise.reject(new Error(`There are no results for trending movies`));
    } catch (error) {
      return error;
    }
}

async function getMovieDetails(movie_id) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=1315643545b87f640bd81c2c08cb68dd&language=en-US`);
    if (response) {return response.data;}
      return Promise.reject(new Error(`There are no results for trending movies`));
  } catch (error) {
    return error;
  }
}

async function getMovieCredits(movie_id) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=1315643545b87f640bd81c2c08cb68dd&language=en-US`);
    if (response) {return response.data;}
      return Promise.reject(new Error(`There are no results for trending movies`));
  } catch (error) {
    return error;
  }
}

const api = {
  getTrendingMovies,
  getMovieDetails,
  getMovieCredits,
};

export default api;