import { Route, Routes, Navigate } from "react-router-dom";
import Layout from '../Layout'
import Home from "../../pages/Home";
import Movies from "../../pages/Movies";
import MovieDetails from "../../pages/MovieDetails";
import Cast from "../../pages/Cast";



const App = () => {  
  return (
      <Routes>
        <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} >
              <Route path="cast" element={<Cast />} />
            </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
  );
};

export default App;