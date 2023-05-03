import { Link } from "react-router-dom";

  function fetchMovies() {
    return fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=1315643545b87f640bd81c2c08cb68dd')
      .then(response => {
        if (response.ok) {        
          return response.json();
        }
        return Promise.reject(
          new Error('Помилка завантаження трендових фільмів.'),
        );
    })
  }



const Home = () => {

const movies = fetchMovies()
    .then(response => response.results)
    .then(mov => { console.log(mov)})
  
  return (
    <div>
      {movies.map((movie) => (
        <ul key={movie.id.toString()}>
          <Link to={`${movie.id.toString()}`}>
            <li>{movie.title}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default Home;