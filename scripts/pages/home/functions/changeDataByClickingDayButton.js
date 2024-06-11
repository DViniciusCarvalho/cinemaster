import { setWeekdayMoviesList } from "./setWeekdayMoviesList.js";
import { setMoviePosterImage } from "../../../common/setMoviePosterImage.js";
import { setMovieRatingStars } from "../../../common/setMovieRatingStars.js";
import { setMoviePageLink } from "../../../common/setMoviePageLink.js";
import { setWeekdayMoviesProgramming } from "./setWeekdayMoviesProgramming.js";
import { setMovieName } from "../../../common/setMovieName.js";


const moviePosterElement = document.getElementById('movie-poster');
const sinopseButton = document.getElementById('sinopse-button');
const movieNameAbbr = document.getElementById('movie-name');
const ratingStarLabelElement = document.getElementsByClassName('rating-label')[0];
const ratingStarElements = document.getElementsByClassName('rating-star');


function changeDataByClickingDayButton(
    weekdayMoviesDataList, 
    weekdayProgrammingDataList,

) {
    setWeekdayMoviesList(weekdayMoviesDataList);
    setWeekdayMoviesProgramming(weekdayProgrammingDataList)

    const firstMovieOfWeekday = weekdayMoviesDataList[0];

    setMoviePosterImage(
        firstMovieOfWeekday.imageURL, 
        moviePosterElement
    );
    
    setMovieName(
        firstMovieOfWeekday.name, 
        movieNameAbbr
    );

    setMovieRatingStars(
        firstMovieOfWeekday.rating, 
        ratingStarLabelElement, 
        ratingStarElements
    );

    setMoviePageLink(
        firstMovieOfWeekday.pageLink, 
        sinopseButton
    );
}

export { changeDataByClickingDayButton }