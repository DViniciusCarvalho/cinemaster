import { CINEMA_START_DAY } from "../../../constants.js";

function getCurrentWeekday() {
    const daysButtonsElement = document.getElementById('days-buttons');
    const daysButtonsChildren = daysButtonsElement.children;

    for (let daysButtonChild of daysButtonsChildren) {
        const firstChildOfButton = daysButtonChild.children[0]
        const dayOfWeek = firstChildOfButton.innerText.toLowerCase();
        
        if (daysButtonChild.classList.contains('active')) {
            if (dayOfWeek == 'hoje') {
                return CINEMA_START_DAY;
            }
            else {
                return dayOfWeek;
            }
        }
    }
}

export { getCurrentWeekday }