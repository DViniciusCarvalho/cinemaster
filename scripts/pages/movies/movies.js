import { changeMoviesList } from "./functions/changeMoviesList.js";

import { 
    addFilterSelectListeners 
} from "./functions/addFilterSelectListeners.js";

import { 	
	MOVIES_LIST
} from "../../constants.js";

import { sortMoviesList } from "../../common/sortMoviesList.js";
import { filterMoviesList } from "../../common/filterMoviesList.js";


/* Se a página 'movies.html' tiver query String 'filterText' (http://localhost/movies.html?filterText=filterTextValue), a variável 'MOVIES_LIST', que armazena a lista de filmes que será renderizada, será filtrada com base no valor do texto de filtro e lista de filmes filtrados resultante será renderizada como elementos HTML na página usando a função 'changeMoviesList' */

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