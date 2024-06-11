import { createMovieProgrammingComponent } from "../../../common/createMovieProgrammingComponent.js";


function setWeekdayMoviesProgramming(moviesProgrammingData){
    const programmingListWrapper = document.getElementById('programming-wrapper');
    programmingListWrapper.innerHTML = '';

    for (let movieProgrammingData of moviesProgrammingData) {
        const movieData = movieProgrammingData.movieData;
        const movieName = movieData.name;
        const movieProgrammingList = movieProgrammingData.programming;

        const movieProgrammingComponent = createMovieProgrammingComponent(movieName, movieProgrammingList);

        programmingListWrapper.appendChild(movieProgrammingComponent);
    }

}

export { setWeekdayMoviesProgramming }