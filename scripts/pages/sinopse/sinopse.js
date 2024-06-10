import { changePageTitle } from "./functions/changePageTitle.js";
import { changeSinopePageData } from "./functions/changeSinopsePageData.js";
import { getMovieBySinopseLinkId } from "./functions/getMovieBySinopseLinkId.js";
import { addToggleInfoButtonListeners } from "./functions/addToggleInfoButtonListeners.js";


function init() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const movieSinopseLinkId = urlParams.get('sinopse');

    const movieData = getMovieBySinopseLinkId(movieSinopseLinkId);

    changePageTitle(movieData.name);
    changeSinopePageData(movieData);

    addToggleInfoButtonListeners();
}

document.addEventListener('DOMContentLoaded', () => init());