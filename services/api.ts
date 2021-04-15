import axios from "axios";
import IGenre from "../interfaces/IGenre";
import IMovie from "../interfaces/IMovie";

class Api {
  public getPopularMovies = async (): Promise<IMovie[]> => {
    const { data } = await axios.get(process.env.API_URL);
    return data.results;
  };

  public getFilteredMovies = async (genre: string, year: string): Promise<IMovie[]> => {
    const { data } = await axios.get(process.env.DISCOVER_API.replace("{genre}", genre).replace("{year}", year));

    return data.results;
  };

  public getAllGenres = async (): Promise<IGenre[]> => {
    const { data } = await axios.get(process.env.GENRES_API);

    return data.genres;
  };
}

const api = new Api();
export default api;
