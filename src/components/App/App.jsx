import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import api from '../../api/api';

import { Container, Header } from "./App.styled";


export const App = () => {
  const [movies, setMovies] = useState([]);
        api        
        .getMovies()
        .then(result => {
          setMovies(result.data.results)
        })
        .catch(error => {

        })
  
  return (
    <Container>
      <Header>
        <nav>
          {/* <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link> */}
        </nav>
      </Header>

    <div>
      {movies.map((movie) => (
        <ul key={movie.id.toString()}>

            <li>{movie.title}</li>
          
        </ul>
      ))}
    </div>

    </Container>
  );
};
