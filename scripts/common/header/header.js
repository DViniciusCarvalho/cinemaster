import { addSearchInputListeners } from "./functions/addSearchInputListeners.js";
import { MOVIES_LIST } from "../../constants.js";
import { changeFilteredMoviesList } from "./functions/changeFilteredMoviesList.js";
import { addSearchButtonListeners } from "./functions/addSearchButtonListeners.js";

function init() {
    changeFilteredMoviesList(MOVIES_LIST);
    addSearchInputListeners(MOVIES_LIST);
    addSearchButtonListeners();
}

document.addEventListener('DOMContentLoaded', () => init());