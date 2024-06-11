import { changeMovieSinopsePageTitle } from "./functions/changeMovieSinopsePageTitle.js";
import { changeMovieSinopePageData } from "./functions/changeMovieSinopsePageData.js";
import { getMovieBySinopseLinkId } from "./functions/getMovieBySinopseLinkId.js";
import { addToggleInfoButtonListeners } from "./functions/addToggleInfoButtonListeners.js";

import { 
    addRedirectToTraileButtonListeners 
} from "./functions/addRedirectToTrailerButtonListeners.js";


/* Quando redirecionado à página de sinopse de um filme, será trago consigo o 'sinopseLinkId' de cada filme como uma query String 'sinopse' (ex.: http://localhost/sinopse.html?sinopse=sinopseLinkId), sendo o valor dessa queryString utilizado para pegar os dados do filme em específico fazendo uma busca na lista de filmes com base no valor do 'sinopseLinkId' de cada filme, e esses dados são usados para renderizar os dados do filme específico na página 'sinopse.html' usando as funções 'changeMovieSinopsePageTitle' e 'changeMovieSinopsePageData' */

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