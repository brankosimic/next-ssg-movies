import { Button, FormControl, Input, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import IGenre from "../interfaces/IGenre";

type FilterProps = {
  genres: IGenre[];
};

const Filters: FunctionComponent<FilterProps> = ({ genres }) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>("");
  const handleChange = useCallback((event: React.ChangeEvent<{ value: string[] | string }>) => {
    setSelectedGenres(event.target.value as string[]);
  }, []);

  const handleSubmit = () => {
    window.location.href = `${window.location.origin}?genre=${selectedGenres.join(",")}&year=${selectedYear}`;
  };

  const handleInputChange = useCallback((event: React.ChangeEvent<{ value: string }>) => {
    const enteredYear = event.target.value;
    setSelectedYear(enteredYear);
  }, []);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const genresString = urlParams.get("genre");
    const year = urlParams.get("year");
    if (genresString) {
      setSelectedGenres(genresString.split(","));
    }
    if (year) {
      setSelectedYear(year);
    }
  }, []);

  return (
    <div className={"filters-container"}>
      <FormControl>
        <InputLabel id="demo-simple-select-label" className={"genre-label"}>
          Choose genre
        </InputLabel>

        <Select
          labelId="demo-mutiple-name-label"
          id="demo-simple-select"
          onChange={handleChange}
          value={selectedGenres}
          multiple
          input={<Input />}
        >
          {genres.map((genre) => (
            <MenuItem value={genre.name} key={genre.id}>
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Input placeholder={"Filter by year"} onChange={handleInputChange} value={selectedYear} />
      <Button onClick={handleSubmit}>Select</Button>
    </div>
  );
};
export default Filters;
