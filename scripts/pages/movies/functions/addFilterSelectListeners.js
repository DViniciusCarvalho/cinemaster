import { changeMoviesList } from "./changeMoviesList.js";

function sortMoviesList(event, weekMoviesList) {
    const selectElement = event.target;
    const selectedOptionValue = selectElement.value;

    const objectifiedMoviesList = weekMoviesList.map(y => Object.assign({}, y));

    let sortFunction = null;

    if (selectedOptionValue === 'alphabetic-order') {
        sortFunction = function(a, b) {
            return a.name.localeCompare(b.name);
        }
    }
    else if (selectedOptionValue === 'rating') {
        sortFunction = function(a, b) {
            return a.rating - b.rating;
        }
    }
    else if (selectedOptionValue === 'duration') {
        sortFunction = function(a, b) {
            return a.duration.minutes - b.duration.minutes;
        }
    }
    else if (selectedOptionValue === 'classification') {
        sortFunction = function(a, b) {
            return a.classification.age - b.classification.age;
        }
    }

    const sortedMoviesList = objectifiedMoviesList.sort(sortFunction);
    
    return sortedMoviesList;
}

function addFilterSelectListeners(weekMovies) {
    const filterSelect = document.querySelector('.filter-select');

    filterSelect.addEventListener('change', function(event){
        const sortedMoviesList = sortMoviesList(event, weekMovies);
        changeMoviesList(sortedMoviesList);
    });
}

export { addFilterSelectListeners }