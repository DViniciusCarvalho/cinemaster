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
}

function addDaysButtonsListeners() {
    const daysButtonsElement = document.getElementsByClassName('days-buttons')[0];
    const childrenButtons = Array.from(daysButtonsElement.children);

    for (let childButton of childrenButtons) {
        childButton.addEventListener('click', (event) => activeButton(event));
    }
}

export { addDaysButtonsListeners };