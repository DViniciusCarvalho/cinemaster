import { setMoviePosterImage } from "../../../common/setMoviePosterImage.js";
import { setMovieRatingStars } from "../../../common/setMovieRatingStars.js";
import { setMoviePageLink } from "../../../common/setMoviePageLink.js";
import { setMovieName } from "../../../common/setMovieName.js";


const moviePosterElement = document.getElementById('movie-poster');
const sinopseButton = document.getElementById('sinopse-button');
const movieNameAbbr = document.getElementById('movie-name');
const ratingStarLabelElement = document.getElementsByClassName('rating-label')[0];
const ratingStarElements = document.getElementsByClassName('rating-star');


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