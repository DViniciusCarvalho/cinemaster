import { changeMoviesList } from "./functions/changeMoviesList.js";
import { addFilterSelectListeners } from "./functions/addFilterSelectListeners.js";
import { 	
	MOVIES_LIST
} from "../../constants.js";
import { sortMoviesList } from "./functions/sortMoviesList.js";
import { filterMoviesList } from "../../common/filterMoviesList.js";


function init() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const filterTextQuery = urlParams.get('filterText');

    if (filterTextQuery) {
        const filteredMoviesList = filterMoviesList(MOVIES_LIST, filterTextQuery)
        const sortedMoviesList = sortMoviesList(filteredMoviesList);
    
        changeMoviesList(sortedMoviesList);
        addFilterSelectListeners(filteredMoviesList, filterTextQuery);
    }
    else {
        const sortedMoviesList = sortMoviesList(MOVIES_LIST);
    
        changeMoviesList(sortedMoviesList);
        addFilterSelectListeners(MOVIES_LIST);
    }

}

document.addEventListener('DOMContentLoaded', () => init());