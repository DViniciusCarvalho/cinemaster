import { 
    createMovieProgrammingComponent 
} from "../../../common/createMovieProgrammingComponent.js";
import { getCapitalizedWord } from "../../../common/getWordFirstLetterUpper.js";
import { WEEK_DATES } from "../../../constants.js";


function filterProgrammingDataByMovie(movieData, moviesProgrammingData){
    for (let weekDay in moviesProgrammingData) {
        moviesProgrammingData[weekDay] = moviesProgrammingData[weekDay].filter(
            function(weekDayMoviesProgrammingData) {
                return weekDayMoviesProgrammingData.movieData === movieData;
            }
        )
    }

    return moviesProgrammingData;
}


function changeMovieProgrammingSection(movieData, moviesProgrammingData){
    const programmingListWrapper = document.getElementById('programming-content-section');

    programmingListWrapper.innerHTML = '';

    const filteredByMovieProgrammingData = filterProgrammingDataByMovie(
        movieData, 
        moviesProgrammingData
    );


    for (let weekDay in filteredByMovieProgrammingData) {
        const weekDayMovieProgrammingList = filteredByMovieProgrammingData[weekDay];
        const movieHasProgrammingAtCurrentWeekDay = weekDayMovieProgrammingList.length;

        if (!movieHasProgrammingAtCurrentWeekDay) {
            continue;
        }

        const capitalizedWeekDay = getCapitalizedWord(weekDay);
        const weekDayTitle = capitalizedWeekDay + ' ' + WEEK_DATES[weekDay];

        const singleMovieInWeekDayProgrammingList = weekDayMovieProgrammingList[0];
        const movieProgrammingList = singleMovieInWeekDayProgrammingList.programming;

        const movieProgrammingComponent = createMovieProgrammingComponent(
            weekDayTitle, 
            movieProgrammingList
        );

        programmingListWrapper.appendChild(movieProgrammingComponent);
    }
}

export { changeMovieProgrammingSection }