import { WEEK_MOVIES } from "../../../constants.js";
import { getCurrentWeekday } from "./getCurrentWeekday.js";
import { changeDataByClickingMovie } from "./changeDataByClickingMovie.js";


const moviesListWrapperElement = document.getElementById('movies-list-wrapper');

function changeActiveMovie(movieElement) {
    const movieList = movieElement.parentElement;
    const movieListChildren = Array.from(movieList.children);

    for (let movieListChild of movieListChildren) {
        if (movieListChild !== movieElement) {
            movieListChild.classList.remove('active-movie');
        }
        else {
            movieListChild.classList.add('active-movie');
        }
    }
}

function createAndAppendMovieListElement(imageURL, listIndex) {
    const movieWrapper = document.createElement('li');
    const movieImage = document.createElement('img');
    
    movieImage.src = imageURL;
    movieWrapper.id = `movie-${listIndex}`;

    if (listIndex == 0) {
        movieWrapper.classList.add('active-movie');
    }

    movieWrapper.appendChild(movieImage);

    movieWrapper.addEventListener('click', function(event) {
        // se o elemento clicado (target) for o filho (img) do elemento desejado (li), o elemento clicado (target) vai passar a ser o pai do elemento clicado (target = target.parentElement)
        let target = event.target;
        if (event.target.tagName === 'IMG') {
            target = target.parentElement;
        }

        const movieWrapperId = target.id;
        const movieWrapperIDNumberParts = movieWrapperId.match(/\d+/g);
        const movieWrapperIDFirstNumberPart = Number(movieWrapperIDNumberParts[0]);
        const movieOrderIndex = movieWrapperIDFirstNumberPart;
        const weekday = getCurrentWeekday();
        const weekdayMoviesData = WEEK_MOVIES[weekday];
        const clickedMovieData = weekdayMoviesData[movieOrderIndex];

        changeDataByClickingMovie(clickedMovieData);
        changeActiveMovie(target);
    });

    moviesListWrapperElement.appendChild(movieWrapper);
}

function setWeekdayMoviesList(movieDataList) {
    moviesListWrapperElement.innerHTML = '';

    for (let i = 0; i < movieDataList.length; i++) {
        const movieData = movieDataList[i];
        createAndAppendMovieListElement(movieData.imageURL, i);
    }
}


export { setWeekdayMoviesList }