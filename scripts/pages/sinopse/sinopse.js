import { changeMovieSinopsePageTitle } from "./functions/changeMovieSinopsePageTitle.js";
import { changeMovieSinopePageData } from "./functions/changeMovieSinopsePageData.js";
import { getMovieBySinopseLinkId } from "./functions/getMovieBySinopseLinkId.js";
import { addToggleInfoButtonListeners } from "./functions/addToggleInfoButtonListeners.js";
import { addRedirectToTraileButtonListeners } from "./functions/addRedirectToTrailerButtonListeners.js";


function init() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const movieSinopseLinkId = urlParams.get('sinopse');

    const movieData = getMovieBySinopseLinkId(movieSinopseLinkId);

    changeMovieSinopsePageTitle(movieData.name);
    changeMovieSinopePageData(movieData);

    addToggleInfoButtonListeners();
    addRedirectToTraileButtonListeners();
}

document.addEventListener('DOMContentLoaded', () => init());