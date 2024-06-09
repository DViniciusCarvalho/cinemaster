import { setWeekdayMoviesList } from "./setWeekdayMoviesList.js";
import { setMoviePosterImage } from "./setMoviePosterImage.js";
import { setMovieRatingStars } from "./setMovieRatingStars.js";
import { setMoviePageLink } from "./setMoviePageLink.js";


function changeDataByClickingDayButton(weekdayMoviesDataList, weekdayProgrammingDataList) {
    setWeekdayMoviesList(weekdayMoviesDataList);

    const firstMovieOfWeekday = weekdayMoviesDataList[0];

    setMoviePosterImage(firstMovieOfWeekday.imageURL);
    setMovieRatingStars(firstMovieOfWeekday.rating);
    setMoviePageLink(firstMovieOfWeekday.pageLink)
}

export { changeDataByClickingDayButton }