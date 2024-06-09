import { setMoviePosterImage } from "./setMoviePosterImage.js";
import { setMovieRatingStars } from "./setMovieRatingStars.js";
import { setMoviePageLink } from "./setMoviePageLink.js";

function changeDataByClickingMovie(clickedMovieData) {
    setMoviePosterImage(clickedMovieData.imageURL);
    setMovieRatingStars(clickedMovieData.rating);
    setMoviePageLink(clickedMovieData.pageLink);
}

export { changeDataByClickingMovie }