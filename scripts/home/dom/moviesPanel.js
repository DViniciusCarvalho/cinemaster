import { initialMovieData } from "../constants";

export function setRatingStars(movieData) {
    const STARS_NUMBER = 5;

    const ratingStarElements = document.getElementsByClassName('rating-star');
    const ratingStarElementsList = Array.from(ratingStarElements);

    const movieRating = movieData.rating;
    const movieRatingInteger = Math.floor(movieRating);
    const hasDecimalPart = movieRating > movieRatingInteger;

    let finishedRatingRange = false;

}