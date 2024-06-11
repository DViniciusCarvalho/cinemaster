import { getCurrentWeekday } from "./getCurrentWeekday.js";
import { CINEMA_START_DAY, WEEK_DATES, WEEK_MOVIES, WEEK_PROGRAMMING } from "../../../constants.js";
import { changeDataByClickingDayButton } from "./changeDataByClickingDayButton.js";
import { getCapitalizedWord } from "../../../common/getWordFirstLetterUpper.js";


function activeButton(event) {
    // se o elemento clicado (target) for um dos filhos (p) do elemento desejado (button), o elemento clicado (target) vai passar a ser o pai do elemento clicado (target = target.parentElement)
    let target = event.target;
    if (event.target.tagName === 'P') {
        target = target.parentElement;
    }
    
    const parent = target.parentElement;
    const buttonElements = Array.from(parent.children);

    for (let buttonElement of buttonElements) {
        if (buttonElement == target) {
            buttonElement.classList.add('active')
        }
        else {
            buttonElement.classList.remove('active')
        }
    }

    const currentWeekday = getCurrentWeekday();
    const weekdayMoviesData = WEEK_MOVIES[currentWeekday];
    const weekdayProgrammingData = WEEK_PROGRAMMING[currentWeekday];

    changeDataByClickingDayButton(weekdayMoviesData, weekdayProgrammingData);
}

function createDayButton(isFirstButton, weekDay, weekDayDate) {
    const dayButton = document.createElement('button');
    const weekDayParagraph = document.createElement('p');
    const weekDayDateParagraph = document.createElement('p');

    if (weekDay === CINEMA_START_DAY) {
        weekDayParagraph.textContent = 'Hoje';
    }
    else {
        const capitalizedWeekDay = getCapitalizedWord(weekDay);
        weekDayParagraph.textContent = capitalizedWeekDay;
    }

    weekDayDateParagraph.textContent = weekDayDate;

    dayButton.appendChild(weekDayParagraph);
    dayButton.appendChild(weekDayDateParagraph);

    if (isFirstButton) {
        dayButton.classList.add('active');
    }

    dayButton.addEventListener('click', (event) => activeButton(event));

    return dayButton;
}

function createDaysButtonsAndAddListeners() {
    const daysButtonsElement = document.getElementById('days-buttons')

    let isFirstButton = true;
    for (let weekDay in WEEK_DATES) {
        const dayButton = createDayButton(
            isFirstButton,
            weekDay, 
            WEEK_DATES[weekDay]
        );

        isFirstButton = false;

        daysButtonsElement.appendChild(dayButton);
    }
}


export { createDaysButtonsAndAddListeners };