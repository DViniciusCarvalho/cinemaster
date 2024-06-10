import { setMovieName } from "../../../common/setMovieName.js";
import { setMoviePageLink } from "../../../common/setMoviePageLink.js";
import { setMoviePosterImage } from "../../../common/setMoviePosterImage.js"
import { setMovieRatingStars } from "../../../common/setMovieRatingStars.js";


function setMovieCardData(movieData, movieCardWrapper) {

    const moviePosterImage = movieCardWrapper.querySelector('.movie-poster');
    const movieName = movieCardWrapper.querySelector('.movie-name');
    const movieRatingStars = movieCardWrapper.querySelectorAll('.rating-star');
    const movieRatingLabel = movieCardWrapper.querySelector('.rating-label');
    const movieSinopseButton = movieCardWrapper.querySelector('.sinopse-button');

    setMoviePosterImage(movieData.imageURL, moviePosterImage);
    setMovieName(movieData.name, movieName);
    setMovieRatingStars(movieData.rating, movieRatingLabel, movieRatingStars);
    setMoviePageLink(movieData.pageLink, movieSinopseButton);
}

export { setMovieCardData }