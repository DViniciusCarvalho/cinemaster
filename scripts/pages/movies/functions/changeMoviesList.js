import { createMovieCard } from "./createMovieCard.js";
import { setMovieCardData } from "./setMovieCardData.js";


function changeMoviesList(moviesData) {
    const moviesListWrapper = document.getElementById('movies-list-wrapper');
    moviesListWrapper.innerHTML = '';

    for (let movieData of moviesData) {
        const movieCard = createMovieCard(movieData);
        moviesListWrapper.appendChild(movieCard);

        setMovieCardData(
            movieData,
            movieCard
        );
    }
}

export { changeMoviesList }