import axios from "axios";


async function getMovies() {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=1315643545b87f640bd81c2c08cb68dd',);
      if (response) {
        return response;
      }
      return Promise.reject(new Error(`There are no results for trending movies`));

    } catch (error) {
      return error;
    }
}

const api = {
  getMovies,
};

export default api;