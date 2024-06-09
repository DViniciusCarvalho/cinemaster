import { getCurrentWeekday } from "./getCurrentWeekday.js";
import { WEEKDAY_MOVIES, WEEKDAY_PROGRAMMING } from "../constants.js";
import { changeDataByClickingDayButton } from "./changeDataByClickingDayButton.js";


function activeButton(event) {
    let target = event.target;
    if (event.target.tagName !== 'button') {
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
    const weekdayMoviesData = WEEKDAY_MOVIES[currentWeekday];
    const weekdayProgrammingData = WEEKDAY_PROGRAMMING[currentWeekday];

    changeDataByClickingDayButton(weekdayMoviesData, weekdayProgrammingData);
}


function addDaysButtonsListeners() {
    const daysButtonsElement = document.getElementById('days-buttons');
    const childrenButtons = Array.from(daysButtonsElement.children);

    for (let childButton of childrenButtons) {
        childButton.addEventListener('click', (event) => activeButton(event));
    }
    
}


export { addDaysButtonsListeners };