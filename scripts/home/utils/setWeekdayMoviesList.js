import { WEEKDAY_MOVIES } from "../constants.js";
import { getCurrentWeekday } from "./getCurrentWeekday.js";
import { changeDataByClickingMovie } from "./changeDataByClickingMovie.js";


const moviesListWrapperElement = document.getElementById('movies-list-wrapper');


function createAndAppendMovieListElement(imageURL, listIndex) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    
    img.src = imageURL;
    li.id = `movie-${listIndex}`;

    li.appendChild(img);
    li.addEventListener('click', function(event) {
        const liElement = event.target.parentElement;
        const liStringID = liElement.id;
        const IDNumberMatches = liStringID.match(/\d+/g);
        const firstNumberMatch = Number(IDNumberMatches[0]);
        const liNumberIDIndex = firstNumberMatch;
        const weekday = getCurrentWeekday();
        const weekdayMoviesData = WEEKDAY_MOVIES[weekday];
        const clickedMovieData = weekdayMoviesData[liNumberIDIndex];

        changeDataByClickingMovie(clickedMovieData);
    })
    moviesListWrapperElement.appendChild(li);
}

function setWeekdayMoviesList(movieDataList) {
    moviesListWrapperElement.innerHTML = '';

    for (let i = 0; i < movieDataList.length; i++) {
        const movieData = movieDataList[i];
        createAndAppendMovieListElement(movieData.imageURL, i);
    }
}


export { setWeekdayMoviesList }