import { 
    WEEK_PROGRAMMING, 
    WEEK_MOVIES, 
    CINEMA_START_DAY 
} from "../../constants.js";

import { 
    createDaysButtonsAndAddListeners 
} from "./functions/createDaysButtonsAndAddListeners.js";

import { 
    changeDataByClickingDayButton 
} from "./functions/changeDataByClickingDayButton.js";


/* Ao entrar na página 'index.html', são criados os botões de dias da semana e adicionadas funções que reagem ao evento de 'click' neles. Após isso, são pegos os dados dos filmes do primeiro dia da semana 'firstWeekDayMovies', bem como os dados de programação dos filmes do primeiro dia da semana 'firstWeekDayProgramming' e são utilizados para renderizar o conteúdo no HTML usando a função 'changeDataByClickingDatBytton'*/

function init() {
    const firstWeekDayMovies = WEEK_MOVIES[CINEMA_START_DAY];
    const firstWeekDayProgramming = WEEK_PROGRAMMING[CINEMA_START_DAY];

    createDaysButtonsAndAddListeners();

    /* Simula um click no botão de dia da semana para resetar todos os valores que nem um click no botão de data faria */
    changeDataByClickingDayButton(
        firstWeekDayMovies, 
        firstWeekDayProgramming
    );
}

document.addEventListener('DOMContentLoaded', () => init());