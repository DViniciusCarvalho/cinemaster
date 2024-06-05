import { initialMovieData } from "./constants.js";
import { setRatingStars } from "./dom/moviesPanel.js";
import { addDaysButtonsListeners } from "./dayButton.js";

function init() {
    console.log('a')
    addDaysButtonsListeners();
    setRatingStars(initialMovieData);
}

document.addEventListener('DOMContentLoaded', () => init());