import { WEEK_PROGRAMMING, WEEK_MOVIES, CINEMA_START_DAY } from "../../constants.js";
import { createDaysButtonsAndAddListeners } from "./functions/createDaysButtonsAndAddListeners.js";
import { changeDataByClickingDayButton } from "./functions/changeDataByClickingDayButton.js";

export const moviePosterElement = document.getElementById('movie-poster');
export const sinopseButton = document.getElementById('sinopse-button');
export const movieNameAbbr = document.getElementById('movie-name');
export const ratingStarLabelElement = document.getElementsByClassName('rating-label')[0];
export const ratingStarElements = document.getElementsByClassName('rating-star');

function init() {
    const weekCinemaFirstDayMovies = WEEK_MOVIES[CINEMA_START_DAY];
    const weekCinemaFirstDayProgramming = WEEK_PROGRAMMING[CINEMA_START_DAY];

    createDaysButtonsAndAddListeners();

    // simula um click no botão de dia da semana para resetar todos os valores que nem um click no botão de data faria
    changeDataByClickingDayButton(weekCinemaFirstDayMovies, weekCinemaFirstDayProgramming);
}

document.addEventListener('DOMContentLoaded', () => init());