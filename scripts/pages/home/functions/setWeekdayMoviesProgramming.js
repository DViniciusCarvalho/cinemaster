function createMovieProgrammingComponent(movieName, movieProgrammingList) {
    const movieProgrammingWrapper = document.createElement('li');
    const movieProgrammingNameLabel = document.createElement('h3');
    
    movieProgrammingNameLabel.textContent = movieName;

    movieProgrammingWrapper.classList.add('movie-programming');

    movieProgrammingWrapper.appendChild(movieProgrammingNameLabel);
    
    
    for (let movieProgramming of movieProgrammingList) {
        const movieProgrammingTimes = movieProgramming.times;

        const movieProgrammingTimeWrapper = document.createElement('div');
        const movieRoomNumberElement = document.createElement('div');
        const movieProgrammingTimeButtonsWrapper = document.createElement('div');

        movieRoomNumberElement.textContent = 'Sala ' + movieProgramming.room;

        movieProgrammingTimeWrapper.classList.add('programming-time-wrapper');
        movieRoomNumberElement.classList.add('room-number');
        movieProgrammingTimeButtonsWrapper.classList.add('time-buttons-wrapper');

        for (let movieProgrammingTime of movieProgrammingTimes) {
            const movieProgrammingTimeButton = document.createElement('button');
            movieProgrammingTimeButton.textContent = movieProgrammingTime;
            movieProgrammingTimeButton.classList.add('time-button');
            movieProgrammingTimeButtonsWrapper.appendChild(movieProgrammingTimeButton);
        }

        movieProgrammingTimeWrapper.appendChild(movieRoomNumberElement);
        movieProgrammingTimeWrapper.appendChild(movieProgrammingTimeButtonsWrapper);
        movieProgrammingWrapper.appendChild(movieProgrammingTimeWrapper);
    }

    return movieProgrammingWrapper;
}


function setWeekdayMoviesProgramming(moviesProgrammingData){
    const programmingListWrapper = document.getElementById('programming-wrapper');
    programmingListWrapper.innerHTML = '';

    for (let movieProgrammingData of moviesProgrammingData) {
        const movieData = movieProgrammingData.movieData;
        const movieName = movieData.name;
        const movieProgrammingList = movieProgrammingData.programming;

        const movieProgrammingComponent = createMovieProgrammingComponent(movieName, movieProgrammingList);

        programmingListWrapper.appendChild(movieProgrammingComponent);
    }

}

export { setWeekdayMoviesProgramming }