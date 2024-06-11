import { sortMoviesList } from "../../../common/sortMoviesList.js";
import { changeMoviesList } from "./changeMoviesList.js";
import { filterMoviesList } from "../../../common/filterMoviesList.js";


function addFilterSelectListeners(weekMovies, filterTextQuery = '') {
    const filterSelect = document.querySelector('.filter-select');

    filterSelect.addEventListener('change', function(event){
        const selectElement = event.target;
        const selectedOptionValue = selectElement.value;

        const filteredMoviesList = filterMoviesList(
            weekMovies,
            filterTextQuery
        );

        const sortedMoviesList = sortMoviesList(filteredMoviesList, selectedOptionValue);
        changeMoviesList(sortedMoviesList);
    });
}

export { addFilterSelectListeners }