import React, { FunctionComponent, useEffect, useState } from "react";
import MediaCard from "./Card";
import MoviesInterface from "../interfaces/IMovie";
import api from "../services/api";

type MoviesListProps = {
  popularMovies: MoviesInterface[];
};

const MoviesList: FunctionComponent<MoviesListProps> = ({ popularMovies }) => {
  const [movies, setMovies] = useState<MoviesInterface[]>(popularMovies);

  const getMoviesByGenre = async (genres: string[], year: string = "") => {
    const genresLookup = await api.getAllGenres();
    const genreIds = genresLookup.filter((x) => genres.includes(x.name)).map((x) => x.id);
    const data = await api.getFilteredMovies(genreIds.join(","), year);
    setMovies(data);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const genresString = urlParams.get("genre");
    const year = urlParams.get("year");
    if (genresString) {
      getMoviesByGenre(genresString.split(","), year);
    }
  }, []);

  return (
    <div className={"media-container"}>
      {movies.map((movie, index) => {
        return <MediaCard movie={movie} key={index} />;
      })}
    </div>
  );
};

export default MoviesList;
