import { setMoviePosterImage } from "./setMoviePosterImage.js";
import { setMovieRatingStars } from "./setMovieRatingStars.js";
import { setMoviePageLink } from "./setMoviePageLink.js";
import { setMovieName } from "./setMovieName.js";

function changeDataByClickingMovie(clickedMovieData) {
    setMoviePosterImage(clickedMovieData.imageURL);
    setMovieName(clickedMovieData.name);
    setMovieRatingStars(clickedMovieData.rating);
    setMoviePageLink(clickedMovieData.pageLink);
}

export { changeDataByClickingMovie }