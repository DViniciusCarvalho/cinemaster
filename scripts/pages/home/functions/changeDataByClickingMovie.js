import { setMoviePosterImage } from "../../../common/setMoviePosterImage.js";
import { setMovieRatingStars } from "../../../common/setMovieRatingStars.js";
import { setMoviePageLink } from "../../../common/setMoviePageLink.js";
import { setMovieName } from "../../../common/setMovieName.js";
import { 
    moviePosterElement, 
    movieNameAbbr, 
    ratingStarLabelElement, 
    ratingStarElements, 
    sinopseButton
} from '../index.js';

function changeDataByClickingMovie(clickedMovieData) {
    setMoviePosterImage(
        clickedMovieData.imageURL,
        moviePosterElement
    );

    setMovieName(
        clickedMovieData.name, 
        movieNameAbbr
    );

    setMovieRatingStars(
        clickedMovieData.rating,
        ratingStarLabelElement, 
        ratingStarElements
    );

    setMoviePageLink(
        clickedMovieData.pageLink,
        sinopseButton
    );
}

export { changeDataByClickingMovie }