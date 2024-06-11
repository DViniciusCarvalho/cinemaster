/* 
Estrura HTML criada:
<li class="movie-programming">
    <h3>Nome do filme</h3>
    <div class="programming-time-wrapper">
        <div class="room-number">Sala 1</div>
        <div class="time-buttons-wrapper">
            <button class="time-button">horario1</button>
            <button class="time-button">horario2</button>
            ...
            <button class="time-button">horarioN</button>
        </div>
    </div>
        <div class="programming-time-wrapper">
        <div class="room-number">Sala 2</div>
        <div class="time-buttons-wrapper">
            <button class="time-button">horario1</button>
            <button class="time-button">horario2</button>
            ...
            <button class="time-button">horarioN</button>
        </div>
    </div>
    ...
    <div class="programming-time-wrapper">
        <div class="room-number">SalaN</div>
        <div class="time-buttons-wrapper">
            <button class="time-button">horario1</button>
            <button class="time-button">horario2</button>
            <button class="time-button">horario3</button>
            ...
            <button class="time-button">horarioN</button>
        </div>
    </div>
</li>
*/

function createMovieProgrammingComponent(programmingTitle, movieProgrammingList) {
    const movieProgrammingWrapper = document.createElement('li');
    const movieProgrammingTitleLabel = document.createElement('h3');
    
    movieProgrammingTitleLabel.textContent = programmingTitle;

    movieProgrammingWrapper.classList.add('movie-programming');

    movieProgrammingWrapper.appendChild(movieProgrammingTitleLabel);
    
    
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

export { createMovieProgrammingComponent }