import React, { FC } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import MoviesInterface from "../interfaces/IMovie";

type MediaCardProps = {
  movie: MoviesInterface;
};

const MediaCard: FC<MediaCardProps> = ({ movie }) => {
  const url = `${process.env.IMG_URL}${movie.poster_path}`;

  return (
    <Card className={"root-card"}>
      <CardActionArea>
        <CardMedia className={"root-card__media"} image={`${url}`} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default MediaCard;
