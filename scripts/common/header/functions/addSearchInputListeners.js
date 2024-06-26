import { filterMoviesList } from "../../filterMoviesList.js";
import { changeFilteredMoviesList } from "./changeFilteredMoviesList.js";
import { redirectToMoviesList } from "./redirectToMoviesList.js";


function onKeyPress(event) {
    const filterText = event.target.value;

    if (event.key === 'Enter') {
        redirectToMoviesList(filterText);
    }
}

function onSearchInputFocus(event, moviesList){
    setTimeout(() => {
        const searchInputWapper = event.target.parentElement;
        searchInputWapper.style.borderRadius = '5px 5px 0px 0px';

        moviesList.style.display = 'flex';

    }, 200);
}

function onSearchInputBlur(event, moviesList){
    setTimeout(() => {
        const searchInputWapper = event.target.parentElement;
        searchInputWapper.style.borderRadius = '5px';

        moviesList.style.display = 'none';
    }, 200);
}

function onSearchInput(event, moviesList){
    const filterText = event.target.value;

    const filteredMoviesList = filterMoviesList(
        moviesList, 
        filterText
    );

    changeFilteredMoviesList(filteredMoviesList);
}

function addSearchInputListeners(moviesList) {
    const searchInput = document.getElementById('search-input');
    const moviesListElement = document.getElementById('search-filtered-movies');

    searchInput.addEventListener('keypress', function(event) {
        onKeyPress(event);
    });

    searchInput.addEventListener('focus', function(event) {
        onSearchInputFocus(event, moviesListElement);
    });

    searchInput.addEventListener('blur', function(event) {
        onSearchInputBlur(event, moviesListElement);
    });

    searchInput.addEventListener('input', function(event) {
        onSearchInput(event, moviesList);
    });

}

export { addSearchInputListeners }