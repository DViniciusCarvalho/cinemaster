import { WEEKDAY_PROGRAMMING, WEEKDAY_MOVIES, CINEMA_START_DAY } from "./constants.js";
import { addDaysButtonsListeners } from "./functions/addDaysButtonsListeners.js";
import { changeDataByClickingDayButton } from "./functions/changeDataByClickingDayButton.js";


function init() {
    const weekdayCinemaFirstDayMovies = WEEKDAY_MOVIES[CINEMA_START_DAY];
    const weekdayCinemaFirstDayProgramming = WEEKDAY_PROGRAMMING[CINEMA_START_DAY];

    addDaysButtonsListeners();

    // simula um click no botão de dia da semana para resetar todos os valores que nem um click no botão de data faria
    changeDataByClickingDayButton(weekdayCinemaFirstDayMovies, weekdayCinemaFirstDayProgramming);
}

document.addEventListener('DOMContentLoaded', () => init());