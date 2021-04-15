import React, { FunctionComponent} from "react";
import MoviesList from "../components/MovieList";
import MoviesInterface from "../interfaces/IMovie";
import Filters from "../components/Filters";
import IGenre from "../interfaces/IGenre";
import api from "../services/api";

type HomeProps = {
  movies: MoviesInterface[];
  genres: IGenre[];
};
const Home: FunctionComponent<HomeProps> = ({ movies, genres }) => {
  return (
    <div className={"root-container"}>
      <Filters genres={genres} />
      <MoviesList popularMovies={movies} />
    </div>
  );
};
export async function getStaticProps() {
  const movies = await api.getPopularMovies();
  const genres = await api.getAllGenres();

  return {
    props: {
      movies,
      genres,
    },
  };
}

export default Home;
