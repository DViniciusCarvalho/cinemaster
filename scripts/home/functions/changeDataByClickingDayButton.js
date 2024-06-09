import { setWeekdayMoviesList } from "./setWeekdayMoviesList.js";
import { setMoviePosterImage } from "./setMoviePosterImage.js";
import { setMovieRatingStars } from "./setMovieRatingStars.js";
import { setMoviePageLink } from "./setMoviePageLink.js";
import { setWeekdayMoviesProgramming } from "./setWeekdayMoviesProgramming.js";
import { setMovieName } from "./setMovieName.js";


function changeDataByClickingDayButton(weekdayMoviesDataList, weekdayProgrammingDataList) {
    setWeekdayMoviesList(weekdayMoviesDataList);
    setWeekdayMoviesProgramming(weekdayProgrammingDataList)

    const firstMovieOfWeekday = weekdayMoviesDataList[0];

    setMoviePosterImage(firstMovieOfWeekday.imageURL);
    setMovieName(firstMovieOfWeekday.name);
    setMovieRatingStars(firstMovieOfWeekday.rating);
    setMoviePageLink(firstMovieOfWeekday.pageLink);
}

export { changeDataByClickingDayButton }