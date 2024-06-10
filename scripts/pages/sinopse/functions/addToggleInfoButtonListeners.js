const programmingSection = document.getElementById('programming-content-section')
const moreMovieInfoSection = document.getElementById('more-movie-info-content-section')

function activeButton(event) {
    const target = event.target;
    const toggleInfoButtonsList = Array.from(target.parentElement.children);

    for (let toggleInfoButton of toggleInfoButtonsList) {
        if (toggleInfoButton === target) {
            toggleInfoButton.classList.add('active');
        }
        else {
            toggleInfoButton.classList.remove('active');
        }
    }

    if (target.id === 'programming-info-button'){
        programmingSection.style.display = 'flex';
        moreMovieInfoSection.style.display = 'none';
    }
    else {
        programmingSection.style.display = 'none';
        moreMovieInfoSection.style.display = 'flex';
    }

}

function addToggleInfoButtonListeners() {
    const toggleInfoButtons = document.getElementsByClassName("toggle-info-button");
    const toggleInfoButtonsList = Array.from(toggleInfoButtons);

    for (let toggleInfoButton of toggleInfoButtonsList) {
        toggleInfoButton.addEventListener("click", function(event) {
            activeButton(event);
        });
    }
}   

export { addToggleInfoButtonListeners }