import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import MovieDetails from "../../pages/MovieDetails";
import Cast from "../../pages/MovieDetails";
import { Container, Header, Link } from "./App.styled";


const App = () => {  
  return (
    <Container>
      <Header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} >
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};

export default App;